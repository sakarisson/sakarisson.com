import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`

const Container = styled.div``
const Title = styled.h1``
const Subtitle = styled.p``

const Header = () => (
  <Head>
    <Link to="/">
      <Container>
        <Title>Kristian Sakarisson</Title>
        <Subtitle>software engineer</Subtitle>
      </Container>
    </Link>
  </Head>
)

export default Header
