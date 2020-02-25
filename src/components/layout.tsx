import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import SEO from "./seo"
import { Paragraph } from "./Typography"
import { Link } from "../style/Styles"
import Color from "../style/Color"

enum GridArea {
  CONTENT = "CONTENT",
  FOOTER = "FOOTER",
}

const FONT_FAMILY = '"Menlo", "Meslo LG", monospace;'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    font-family: ${FONT_FAMILY}
  }
`

const Root = styled.div`
  background-color: ${Color.BACKGROUND};
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 45em 1fr;
  grid-template-rows: auto 5em;
  grid-template-areas:
    ". ${GridArea.CONTENT} ."
    ". ${GridArea.FOOTER} .";

  @media only screen and (max-width: 42em) {
    grid-template-columns: 0 100% 0;
  }
`

const Content = styled.div`
  grid-area: ${GridArea.CONTENT};
  padding-bottom: 3em;
`

const Footer = styled.footer`
  grid-area: ${GridArea.FOOTER};
  text-align: center;
`

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <SEO title="Sakarisson.com" />
      <Content>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </Content>
      <Footer>
        <Paragraph>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link href="https://www.gatsbyjs.org">Gatsby</Link>
          {`, hosted on `}
          <Link href="https://www.now.sh">now</Link>
        </Paragraph>
      </Footer>
    </Root>
  )
}

export default Layout
