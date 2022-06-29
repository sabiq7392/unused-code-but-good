const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  /** @USE_NODE_JS_MODULES */
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },

  /** @USE_IMAGE_SOURCE_WHEN_ITS_CDN */
  images: {
    domains: ["p16-sign-va.tiktokcdn.com"],
  },

  /**
   *  @USE_ENV
   *  you have to build .env too, next js cant use directly .env so need this config
   */
  env: {
    API_BASE_URL: process.env.NODE_ENV === "production" ? process.env.API_BASE_URL_PRODUCTION : process.env.API_BASE_URL_DEVELOPMENT,
    API_VERSION_2: process.env.API_VERSION_2,
    API_VERSION_1: process.env.API_VERSION_1,
    DOMAIN_PRODUCTION: process.env.DOMAIN_PRODUCTION,
    DOMAIN_DEVELOPMENT: process.env.DOMAIN_DEVELOPMENT,
  },
};
