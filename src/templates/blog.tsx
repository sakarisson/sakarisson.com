import React from "react"
import { graphql } from "gatsby"
import { MarkdownRemark } from "../generated/graphql"
import Layout from "../components/layout"
import { Title, Heading } from "../components/Typography"

type Data = {
  markdownRemark: MarkdownRemark
}

type Props = { data: Data }

export default function Template({ data }: Props) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Title>{frontmatter?.title}</Title>
      <Heading>{frontmatter?.date}</Heading>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
