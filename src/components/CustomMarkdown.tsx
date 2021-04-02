import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import { Body, Code, ExternalLink, Heading } from './Typography';

const MarkdownImage = styled.img`
  max-width: 100%;
`;

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
        inlineCode: Code,
        paragraph: PaddedBody,
        heading: PaddedHeading,
        link: ExternalLink,
        image: MarkdownImage,
      }}
    >
      {children}
    </Markdown>
  </div>
);

export default CustomMarkdown;
