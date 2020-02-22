import React from "react"
import styled from "styled-components"
import * as Typography from "./Typography"

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`

const Container = styled.div``

const Header = () => (
  <Head>
    <Container>
      <Typography.Title>Kristian Sakarisson</Typography.Title>
      <Typography.Paragraph>software engineer</Typography.Paragraph>
    </Container>
  </Head>
)

export default Header
