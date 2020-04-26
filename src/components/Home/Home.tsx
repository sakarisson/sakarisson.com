import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layout"
import * as Typography from "../Typography"
import BlogConnection from "./BlogConnection"
import { MarkdownRemarkConnection } from "../../generated/graphql"

const Heading = styled(Typography.Title).attrs(() => ({
  hasMargin: true,
}))``

const Body = styled(Typography.Body)``

type QueryData = {
  allMarkdownRemark: MarkdownRemarkConnection
}

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

const Home: React.FC = () => {
  const data = useStaticQuery<QueryData>(query)
  const blogEdges = data.allMarkdownRemark.edges
  // const hasBlogs = blogEdges.length > 0
  const hasBlogs = false
  return (
    <Layout>
      <Heading>About me</Heading>
      <Body>
        Hi, my name is Kristian. I am a software engineer living in Helsinki,
        Finland.
      </Body>
      <Body>
        I am currently working at{" "}
        <Typography.ExternalLink href="https://wolt.com/">
          Wolt
        </Typography.ExternalLink>{" "}
        where I develop frontend solutions using modern TypeScript.
      </Body>
      <Body>
        I am a huge fan of React and its ecosystem and I like to explore and
        learn new technologies. In the past few years I've been specializing in
        React Native, where I am especially interested in creating beautiful and
        performant interactions and animations.
      </Body>
      <Body>I have also been into powerlifting since 2011.</Body>
      <Body>
        In the past I have worked as a GIS consultant and a web consultant, and
        I have always had a special place in my heart for all things JavaScript.
      </Body>
      {hasBlogs && (
        <>
          <Heading>Writing</Heading>
          {blogEdges.map((edge) => (
            <BlogConnection frontmatter={edge.node.frontmatter} />
          ))}
        </>
      )}
      <Heading>Internet</Heading>
      <Body>
        If you are interested in some of my code, feel free to check out my{" "}
        <Typography.ExternalLink href="https://github.com/Sakarisson/">
          GitHub profile
        </Typography.ExternalLink>
        .
      </Body>
      <Body>
        To see a wall of basically nothing but retweets, go ahead and follow me
        on{" "}
        <Typography.ExternalLink href="https://twitter.com/ksakarisson">
          Twitter
        </Typography.ExternalLink>
        .
      </Body>
      <Body>
        If you would like to connect professionally, connect with me on{" "}
        <Typography.ExternalLink href="https://www.linkedin.com/in/kristiansakarisson/">
          LinkedIn
        </Typography.ExternalLink>{" "}
        or just{" "}
        <Typography.ExternalLink href="mailto: kristian@sakarisson.com">
          email me
        </Typography.ExternalLink>
        .
      </Body>
    </Layout>
  )
}

export default Home
