import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import * as Typography from '../components/Typography';

const Heading = styled(Typography.Heading).attrs(() => ({
  hasMargin: true,
}))``;

const TestPage = () => (
  <Layout>
    <Heading>This is a test page</Heading>
  </Layout>
);

export default TestPage;
