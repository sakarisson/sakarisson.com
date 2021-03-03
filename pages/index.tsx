import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import aboutText from '../src/text/Home.md';
import CustomMarkdown from '../src/components/CustomMarkdown';
import * as Typography from '../src/components/Typography';
import { getAllPosts } from '../src/utils/api';
import SEO from '../src/components/SEO';

const Heading = styled(Typography.Heading)`
  padding-top: 1em;
  padding-bottom: 1em;
`;

type Post = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO />
      <CustomMarkdown>{aboutText}</CustomMarkdown>
      <Heading>Writing</Heading>
      {posts.map((post) => (
        <Typography.InternalLink
          key={post.slug}
          href={`/posts/${post.slug}`}
          passHref
        >
          {post.title}
        </Typography.InternalLink>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug']);
  return {
    props: { posts },
  };
}

export default Home;
