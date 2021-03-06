import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import type { NextRouter } from "next/router";
import GlobalsStyles from "../styles/globals.styled";
import Head from "next/head";
import { Div } from "../styles/MameStyled/core/HtmlTag";
import { useRouter } from "next/router";
import LayoutMain from "../src/components/templates/LayoutMain";
import LayoutAuth from "../src/components/templates/LayoutAuth";
import { default as __RenderIf } from "../styles/MameStyled/core/utils/js-syntax/If";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router: NextRouter = useRouter();

  return <>
    <Head>
      <title>Kenangan Admin</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/icons/icon.svg" />
    </Head>
    <GlobalsStyles />
    <Div>
      <__RenderIf is={router.pathname.includes("auth")}>
        <LayoutAuth>
          <Component {...pageProps} />
        </LayoutAuth>
      </__RenderIf>

      <__RenderIf is={!router.pathname.includes("auth")}>
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain> 
      </__RenderIf>
    </Div>
  </>;
}
