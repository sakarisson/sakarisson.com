import React from 'react';
import Head from 'next/head';

const META_TITLE = 'Kristian Sakarisson';
const META_DESCRIPTION = "Kristian's site";

type Props = {
  title?: string;
  description?: string;
};

const SEO: React.FC<Props> = ({
  title = META_TITLE,
  description = META_DESCRIPTION,
}) => (
  <Head>
    <title>{META_TITLE}</title>
    <link rel="shortcut icon" href="/static/favicon.ico" key="icon" />
    <meta name="description" content={description} key="description" />
    <meta property="og:title" content={title} key="ogTitle" />
    <meta property="og:description" content={description} key="ogDescription" />
    <meta property="og:type" content="website" key="ogType" />
    <meta name="twitter:card" content="summary" key="twitterCard" />
    <meta name="twitter:creator" content="ksakarisson" key="twitterCreator" />
    <meta name="twitter:title" content={title} key="twitterTitle" />
    <meta
      name="twitter:description"
      content={description}
      key="twitterDescription"
    />
  </Head>
);

export default SEO;
