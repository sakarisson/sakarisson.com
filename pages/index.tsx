import React from 'react';
import styled from 'styled-components';

import * as Typography from '../src/components/Typography';

const Heading = styled(Typography.Title).attrs(() => ({
  hasMargin: true,
}))``;

const Body = styled(Typography.Body)``;

const Home = () => {
  return (
    <div>
      <Heading>About me</Heading>
      <Body>
        Hi, my name is Kristian. I am a software engineer living in Helsinki,
        Finland.
      </Body>
      <Body>
        I am currently working at{' '}
        <Typography.ExternalLink href="https://wolt.com/">
          Wolt
        </Typography.ExternalLink>{' '}
        where I develop frontend solutions using modern TypeScript.
      </Body>
      <Body>
        I am a huge fan of React and its ecosystem and I like to explore and
        learn new technologies. In the past few years I have been specializing
        in React Native, where I am especially interested in creating beautiful
        and performant interactions and animations.
      </Body>
      <Body>I have also been into powerlifting since 2011.</Body>
      <Body>
        In the past I have worked as a GIS consultant and a web consultant, and
        I have always had a special place in my heart for all things JavaScript.
      </Body>
      <Heading>Internet</Heading>
      <Body>
        If you are interested in some of my code, feel free to check out my{' '}
        <Typography.ExternalLink href="https://github.com/Sakarisson/">
          GitHub profile
        </Typography.ExternalLink>
        .
      </Body>
      <Body>
        To see a wall of basically nothing but retweets, go ahead and follow me
        on{' '}
        <Typography.ExternalLink href="https://twitter.com/ksakarisson">
          Twitter
        </Typography.ExternalLink>
        .
      </Body>
      <Body>
        If you would like to connect professionally, connect with me on{' '}
        <Typography.ExternalLink href="https://www.linkedin.com/in/kristiansakarisson/">
          LinkedIn
        </Typography.ExternalLink>{' '}
        or just{' '}
        <Typography.ExternalLink href="mailto: kristian@sakarisson.com">
          email me
        </Typography.ExternalLink>
        .
      </Body>
    </div>
  );
};

export default Home;