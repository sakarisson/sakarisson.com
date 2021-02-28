import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import { Body, Subheading, Title } from '../../src/components/Typography';

type Props = {
  postMetadata: { title: string; date: string };
  postContent: string;
};

const PostTemplate: NextPage<Props> = ({ postMetadata, postContent }) => (
  <div>
    <Title>{postMetadata.title}</Title>
    <Subheading>{postMetadata.date}</Subheading>
    <Body>{postContent}</Body>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: 'my-experience-with-typescript',
      },
    },
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;

  try {
    const rawData = await import(`../../src/_posts/${slug}.md`);
    const formattedData = matter(rawData.default);

    const postMetadata = formattedData.data;
    const postContent = formattedData.content;

    return {
      props: { postMetadata, postContent },
    };
  } catch (error) {
    return {
      props: { postMetadata: error.message, postContent: error.message },
    };
  }
};

export default PostTemplate;
