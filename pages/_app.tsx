import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Color from '../src/style/Color';
import * as Typography from '../src/components/Typography';
import Header from '../src/components/header';

const META_TITLE = 'Kristian Sakarisson';
const META_DESCRIPTION = "Kristian's site";

enum GridArea {
  CONTENT = 'CONTENT',
  FOOTER = 'FOOTER',
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
  }
  body, html {
    height: 100%;
    background-color: ${Color.BACKGROUND};
  }
`;

const Root = styled.div`
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 45em 1fr;
  grid-template-rows: auto 5em;
  grid-template-areas:
    ". ${GridArea.CONTENT} ."
    ". ${GridArea.FOOTER} .";

  @media only screen and (max-width: 42em) {
    grid-template-columns: 0 100% 0;
  }
`;

const Content = styled.div`
  grid-area: ${GridArea.CONTENT};
  padding-bottom: 3em;
`;

const Footer = styled.footer`
  grid-area: ${GridArea.FOOTER};
  text-align: center;
`;

const SmallLink = styled(Typography.ExternalLink)`
  font-size: 14px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Head>
        <title>{META_TITLE}</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="ksakarisson" />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      <Content>
        <GlobalStyle />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Content>
      <Footer>
        <Typography.Small>
          © {new Date().getFullYear()}, Built with{' '}
          <SmallLink href="https://nextjs.org/">Next.js</SmallLink>
          {', hosted on '}
          <SmallLink href="https://vercel.com/">Vercel</SmallLink>
        </Typography.Small>
      </Footer>
    </Root>
  );
}

export default MyApp;
