import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo"
import * as Typography from "./Typography"
import Color from "../style/Color"
import { SiteSiteMetadata } from "../generated/graphql"

enum GridArea {
  CONTENT = "CONTENT",
  FOOTER = "FOOTER",
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
  }
  body, html {
    height: 100%;
    background-color: ${Color.BACKGROUND};
  }
`

const Root = styled.div`
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

type QueryData = {
  site: {
    siteMetadata: SiteSiteMetadata
  }
}

const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery<QueryData>(query)
  return (
    <Root>
      <SEO title={data.site.siteMetadata.title} />
      <Content>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </Content>
      <Footer>
        <Typography.Small>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Typography.ExternalLink href="https://www.gatsbyjs.org">
            Gatsby
          </Typography.ExternalLink>
          {`, hosted on `}
          <Typography.ExternalLink href="https://www.now.sh">
            now
          </Typography.ExternalLink>
        </Typography.Small>
      </Footer>
    </Root>
  )
}

export default Layout
