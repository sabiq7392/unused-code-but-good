/**
 * Map should be async and store to promise.all when we request to database or somethin async
 */
const preResults = findVideoReported.map(async ({
	id, description, reported_by, category, video_id, createdAt, updatedAt,
}) => ({
	id,
	description,
	reported_by,
	category,
	video: await models.Video.findOne({ 
		where: { id: video_id },
		include: [
			{
				model: models.User,
				as: 'owner',
				attributes: ['id', 'username', 'name', 'photo'],
			},
		],
	}),
	createdAt,
	updatedAt,
}));

const results = await Promise.all(preResults);

const preResults = findVideosReported.map(async ({ 
	id, description, reported_by, category, video, createdAt, updatedAt
}) => ({
	id,
	description,
	reported_by,
	reported_by_details: await models.User.findOne({ 
		where: { id: jwt.verify(reported_by, process.env.SECRET_KEY).id },
		attributes: ['name', 'photo'],
	}),
	category,
	video,
	createdAt,
	updatedAt,
}));

const results = await Promise.all(preResults);
