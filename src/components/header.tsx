import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import * as Typography from './Typography';
import Color from '../style/Color';

const StyledLink = styled.a`
  text-decoration: none;
`;

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`;

const Title = styled(Typography.Title)`
  font-size: 58px;
  padding-bottom: 0.1em;
  text-align: right;
`;

const Subtitle = styled(Typography.Body)`
  font-weight: bold;
  font-size: 20px;
  color: ${Color.TEXT_SECONDARY};
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 0em 2em;
  @media only screen and (max-width: 42em) {
    grid-auto-flow: row;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2em;
  @media only screen and (max-width: 42em) {
    padding-bottom: 2em;
  }
`;

const Header = () => {
  return (
    <Head>
      <Link href="/" passHref>
        <StyledLink>
          <Container>
            <LeftContainer>
              <div>
                <Title>Kristian Sakarisson</Title>
                <Subtitle>software engineer in Helsinki</Subtitle>
              </div>
            </LeftContainer>
          </Container>
        </StyledLink>
      </Link>
    </Head>
  );
};

export default Header;
