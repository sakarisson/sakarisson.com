import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import { Subheading, Title } from '../../src/components/Typography';

type Props = {
  postMetadata: { title: string; date: string };
};

const PostTemplate: NextPage<Props> = ({ postMetadata }) => (
  <div>
    <Title>{postMetadata.title}</Title>
    <Subheading>{postMetadata.date}</Subheading>
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

    const postMetadata = matter(rawData.default).data;

    return {
      props: { postMetadata },
    };
  } catch (error) {
    return { props: { postMetadata: error.message } };
  }
};

export default PostTemplate;
