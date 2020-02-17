import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type Props = {
  title: string
  subtitle: string
}

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0em 2.5em;
`

const Container = styled.div``
const Title = styled.h1``
const Subtitle = styled.p``

const Header: React.FC<Props> = ({ title, subtitle }) => (
  <Head>
    <Link to="/">
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </Link>
  </Head>
)

export default Header
