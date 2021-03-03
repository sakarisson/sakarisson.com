import React from 'react';
import styled from 'styled-components';
import SEO from '../src/components/SEO';

import * as Typography from '../src/components/Typography';

const Heading = styled(Typography.Heading).attrs(() => ({
  hasMargin: true,
}))``;
const { Body } = Typography;

const Blame = styled.span`
  color: red;
`;

const NotFoundPage = () => (
  <>
    <SEO title="Page not found" />
    <Heading>NOT FOUND</Heading>
    <Body>
      You just hit a route that does not exist. This is your fault.{' '}
      <Blame>Stop it.</Blame>
    </Body>
  </>
);

export default NotFoundPage;
