import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';

type Props = {
  postContents: { title: string; date: string };
};

const PostTemplate: NextPage<Props> = ({ postContents }) => (
  <div>
    <div>This is a post</div>
    <div>{postContents.title}</div>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  // const paths = sampleUserData.map((user) => ({
  //   params: { id: user.id.toString() },
  // }))

  const paths = [
    {
      params: {
        slug: 'my-experience-with-typescript',
      },
    },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  try {
    // @ts-ignore
    const rawData = await import(`../../src/_posts/${slug}.md`);

    const postContents = matter(rawData.default).data;

    return {
      props: { postContents },
    };
  } catch (error) {
    return { props: { postContents: error.message } };
  }
};

export default PostTemplate;
