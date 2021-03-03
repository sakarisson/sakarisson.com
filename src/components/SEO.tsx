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
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="ksakarisson" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Head>
);

export default SEO;
