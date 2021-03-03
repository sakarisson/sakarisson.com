import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import { Body, ExternalLink, Heading } from './Typography';

const PaddedHeading = styled(Heading)`
  padding-top: 1em;
  padding-bottom: 1em;
`;

const PaddedBody = styled(Body)`
  padding-bottom: 1em;
`;

type Props = {
  children: string;
};

const CustomMarkdown: React.FC<Props> = ({ children }) => (
  <div>
    <Markdown
      renderers={{
        paragraph: PaddedBody,
        heading: PaddedHeading,
        link: ExternalLink,
      }}
    >
      {children}
    </Markdown>
  </div>
);

export default CustomMarkdown;
