import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import Color from '../src/style/Color';
import { Analytics } from '@vercel/analytics/react';
import Header from '../src/components/header';

enum GridArea {
  CONTENT = 'CONTENT',
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
  grid-template-columns: 1fr 50em 1fr;
  grid-template-rows: auto 5em;
  grid-template-areas: '. ${GridArea.CONTENT} .';

  @media only screen and (max-width: 42em) {
    grid-template-columns: 0 100% 0;
  }
`;

const Content = styled.div`
  grid-area: ${GridArea.CONTENT};
  padding-bottom: 3em;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Root>
        <Content>
          <GlobalStyle />
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </Content>
      </Root>
      <Analytics />
    </>
  );
}

export default MyApp;
