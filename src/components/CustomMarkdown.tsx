import React, { ComponentProps } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Body, InlineCode, Hyperlink, Heading, Subheading } from './Typography';

const MarkdownImage = styled.img`
  max-width: 100%;
`;

const PaddedHeading = styled(Heading)`
  padding: 0.5em 0;
`;

const PaddedSubheading = styled(Subheading)`
  padding: 0.5em 0;
`;

const PaddedBody = styled(Body)`
  padding-bottom: 1em;
`;

const SyntaxContainer = styled.div`
  padding-bottom: 1em;
`;

type CodeElement = {
  node: {
    value: string;
  };
  language: string;
};

const Code = (element: CodeElement) => (
  <SyntaxContainer>
    <SyntaxHighlighter
      customStyle={{
        fontSize: '16px',
        lineHeight: '18px',
        borderRadius: 6,
      }}
      language={element.language}
      wrapLongLines
    >
      {element.node.value}
    </SyntaxHighlighter>
  </SyntaxContainer>
);

type MarkdownHeadingProps = ComponentProps<typeof PaddedHeading> & {
  level: 2 | 3;
};

const MarkdownHeading = ({ level, ...restProps }: MarkdownHeadingProps) => {
  const getElement = () => {
    if (level === 3) {
      return PaddedSubheading;
    }
    return PaddedHeading;
  };
  const Element = getElement();
  return <Element {...restProps} />;
};

type Props = {
  children: string;
};

const CustomMarkdown: React.FC<Props> = ({ children }) => (
  <div>
    <Markdown
      renderers={{
        inlineCode: InlineCode,
        code: Code,
        paragraph: PaddedBody,
        heading: MarkdownHeading,
        link: Hyperlink,
        image: MarkdownImage,
      }}
    >
      {children}
    </Markdown>
  </div>
);

export default CustomMarkdown;
