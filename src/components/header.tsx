import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import * as Typography from './Typography';
import Color from '../style/Color';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Root = styled.header`
  display: flex;
  flex-direction: column;
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
  justify-content: center;

  @media only screen and (max-width: 42em) {
    grid-auto-flow: row;
  }
`;

const SmallLink = styled(Typography.Hyperlink)`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: initial;
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

const LinksContainer = styled.div`
  display: flex;
  padding-top: 0.5em;

  a:not(:last-child) {
    padding-right: 0.5em;
    border-right: 1px solid ${Color.TEXT_SECONDARY};
  }
  a:not(:first-child) {
    padding-left: 0.5em;
  }
`;

const links = [
  {
    title: 'Curriculum vitae',
    href: 'https://raw.githubusercontent.com/sakarisson/curriculum_vitae/main/CV.pdf',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kristiansakarisson/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Sakarisson/',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/ksakarisson',
  },
];

const Header = () => (
  <Root>
    <Container>
      <LeftContainer>
        <div>
          <StyledLink href="/">
            <Title>Kristian Sakarisson</Title>
            <Subtitle>software engineer in Helsinki</Subtitle>
          </StyledLink>
          <LinksContainer>
            {links.map(({ title, href }) => (
              <SmallLink href={href} key={href}>
                {title}
              </SmallLink>
            ))}
          </LinksContainer>
        </div>
      </LeftContainer>
    </Container>
  </Root>
);

export default Header;
