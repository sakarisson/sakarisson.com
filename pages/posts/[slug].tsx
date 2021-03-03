import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import styled from 'styled-components';
import fs from 'fs';

import { Subheading, Title } from '../../src/components/Typography';
import CustomMarkdown from '../../src/components/CustomMarkdown';

const TitleContainer = styled.div`
  padding-bottom: 1em;
`;

type Props = {
  title: string;
  date: string;
  content: string;
};

const PostTemplate: NextPage<Props> = ({ title, date, content }) => (
  <div>
    <TitleContainer>
      <Title>{title}</Title>
      <Subheading>{date}</Subheading>
    </TitleContainer>
    <CustomMarkdown>{content}</CustomMarkdown>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const POST_DIRECTORY = 'src/_posts';

  const files = fs.readdirSync(POST_DIRECTORY);

  const paths = files.map((file) => ({
    params: { slug: file.replace('.md', '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;

  const rawData = await import(`../../src/_posts/${slug}.md`);
  const formattedData = matter(rawData.default);

  const postMetadata = formattedData.data as Omit<Props, 'content'>;
  const postContent = formattedData.content;

  return {
    props: {
      ...postMetadata,
      content: postContent,
    },
  };
};

export default PostTemplate;
