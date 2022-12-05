import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { isAfter, isBefore } from 'date-fns';

// @ts-ignore
import aboutText from '../src/text/Home.md';
import CustomMarkdown from '../src/components/CustomMarkdown';
import * as Typography from '../src/components/Typography';
import { getAllPosts } from '../src/utils/api';
import SEO from '../src/components/SEO';

const Heading = styled(Typography.Heading)`
  padding: 0.5em 0;
`;

type Post = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

const sortByDateDesc = ({ date: aStr }: Post, { date: bStr }: Post) => {
  const a = new Date(aStr);
  const b = new Date(bStr);

  if (isBefore(a, b)) {
    return 1;
  }
  if (isAfter(a, b)) {
    return -1;
  }
  return 0;
};

const Home: NextPage<Props> = ({ posts }) => (
  <>
    <SEO />
    <CustomMarkdown>{aboutText}</CustomMarkdown>
    <Heading>Writing</Heading>
    <ul>
      {[...posts].sort(sortByDateDesc).map((post) => (
        <li key={post.slug}>
          <Typography.Hyperlink
            key={post.slug}
            href={`/posts/${post.slug}`}
            passHref
          >
            {post.title}
          </Typography.Hyperlink>
        </li>
      ))}
    </ul>
  </>
);

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug']);
  return {
    props: { posts },
  };
}

export default Home;
