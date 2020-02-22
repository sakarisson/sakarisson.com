import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const FONT_FAMILY =
  '"Gill Sans", "Gill Sans MT", "Calibri", "Lato", "sans-serif"'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    font-family: ${FONT_FAMILY}
  }
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 40em 1fr;
  grid-template-areas: ". content .";
`

const Content = styled.div`
  grid-area: content;
`

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <Content>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </Content>
    </Root>
  )
}

export default Layout
