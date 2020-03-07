import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import * as Typography from "./Typography"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`

const Container = styled.div``

const Header = () => (
  <Head>
    <StyledLink to="/">
      <Container>
        <Typography.Title>Kristian Sakarisson</Typography.Title>
        <Typography.Body>software engineer</Typography.Body>
      </Container>
    </StyledLink>
  </Head>
)

export default Header
