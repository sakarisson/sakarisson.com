import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';

import { MarkdownRemark } from '../generated/graphql';
import Layout from '../components/layout';
import * as Typography from '../components/Typography';

const Title = styled(Typography.Title)`
  margin-bottom: 16px;
`;

const Heading = styled(Typography.Heading)`
  margin-bottom: 8px;
`;

const Subheading = styled(Typography.Subheading)`
  margin-bottom: 8px;
`;

const Body = styled(Typography.Body)`
  margin-bottom: 8px;
`;

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    h2: Heading,
    h3: Subheading,
    p: Body,
  },
}).Compiler;

type Data = {
  markdownRemark: MarkdownRemark;
};

type Props = { data: Data };

export default function Template({ data }: Props) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Layout>
      <Title>{frontmatter?.title}</Title>
      <div className="blog-post-content">{renderAst(htmlAst)}</div>
    </Layout>
  );
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
`;
