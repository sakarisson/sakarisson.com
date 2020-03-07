import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"

import { MarkdownRemark } from "../generated/graphql"
import Layout from "../components/layout"
import { Title, Heading, Body } from "../components/Typography"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    h2: Heading,
    p: Body,
  },
}).Compiler

type Data = {
  markdownRemark: MarkdownRemark
}

type Props = { data: Data }

export default function Template({ data }: Props) {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <Title>{frontmatter?.title}</Title>
      <div className="blog-post-content">{renderAst(htmlAst)}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
