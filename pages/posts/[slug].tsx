import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import styled from 'styled-components';
import fs from 'fs';
import { format } from 'date-fns';

import { Small, Title } from '../../src/components/Typography';
import CustomMarkdown from '../../src/components/CustomMarkdown';
import SEO from '../../src/components/SEO';

const TitleContainer = styled.div`
  padding-bottom: 1em;
`;

const SmallContainer = styled.div`
  padding-bottom: 1em;
`;

type Props = {
  title: string;
  date: string;
  content: string;
  description: string;
};

const PostTemplate: NextPage<Props> = ({
  title,
  date,
  content,
  description,
}) => (
  <>
    <SEO title={title} description={description} />
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <SmallContainer>
      <Small>{date}</Small>
    </SmallContainer>
    <CustomMarkdown>{content}</CustomMarkdown>
  </>
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

  const { title, date, description } = formattedData.data as {
    title: string;
    date: Date;
    description: string;
  };
  const postContent = formattedData.content;

  return {
    props: {
      title,
      date: format(date, 'PPP'),
      description,
      content: postContent,
    },
  };
};

export default PostTemplate;
