import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';

import { File } from '../generated/graphql';
import * as Typography from './Typography';
import Color from '../style/Color';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`;

const Title = styled(Typography.Title)`
  font-size: 42px;
  font-weight: 400;
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

const RoundImage = styled(Img)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "me_portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

type QueryData = {
  portrait: File
}

const Header = () => {
  const data = useStaticQuery<QueryData>(query);

  const fluid = data.portrait.childImageSharp?.fluid as FluidObject;

  return (
    <Head>
      <StyledLink to="/">
        <Container>
          <LeftContainer>
            <div>
              <Title>Kristian Sakarisson</Title>
              <Subtitle>software engineer in Helsinki</Subtitle>
            </div>
          </LeftContainer>
          <RoundImage fluid={fluid} />
        </Container>
      </StyledLink>
    </Head>
  );
};

export default Header;
