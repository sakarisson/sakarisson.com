import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img, { FixedObject } from "gatsby-image"

import { File } from "../generated/graphql"
import * as Typography from "./Typography"
import Color from "../style/Color"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`

const Title = styled(Typography.Title)`
  font-size: 42px;
  font-weight: 900;
`

const Subtitle = styled(Typography.Body)`
  font-weight: bold;
  font-size: 20px;
  color: ${Color.TEXT_SECONDARY};
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 0em 2em;
`

const LeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding-right: 2em;
`

const RoundImage = styled(Img)`
  border-radius: 50%;
`

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "me_portrait.jpg" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

type QueryData = {
  portrait: File
}

const Header = () => {
  const data = useStaticQuery<QueryData>(query)

  const portraitFixed = data.portrait.childImageSharp?.fixed as FixedObject

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
          <RoundImage fixed={portraitFixed} />
        </Container>
      </StyledLink>
    </Head>
  )
}

export default Header
