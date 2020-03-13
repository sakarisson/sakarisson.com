import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
  font-size: 32px;
  font-weight: 900;
`

const Container = styled.div``

const Header = () => (
  <Head>
    <StyledLink to="/">
      <Container>
        <Title>Kristian Sakarisson</Title>
        <Typography.Body>software engineer</Typography.Body>
      </Container>
    </StyledLink>
  </Head>
)

export default Header
