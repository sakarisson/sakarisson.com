import React, { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Color from '../style/Color';

const HEADING_FONT = '"Roboto Mono", monospace';
const BODY_FONT = '"Roboto Mono", monospace';

export const Title = styled.h1`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 28px;
  line-height: 42px;
  font-weight: 700;
`;

export const Heading = styled.h2`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 24px;
  font-weight: 700;
`;

export const Subheading = styled.h3`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 20px;
  font-weight: bold;
`;

const SharedBodyStyles = css`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${BODY_FONT};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

export const Body = styled.p`
  ${SharedBodyStyles}
`;

export const Small = styled.p`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${BODY_FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ExternalLink = styled.a`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${BODY_FONT};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

export const InlineCode = styled.code`
  ${SharedBodyStyles}
  background-color: ${Color.CODE_BACKGROUND};
  border-radius: 6px;
  overflow-wrap: break-word;
  box-sizing: border-box;
  display: inline-block;
  padding: 0px 5px;
`;

type InternalLinkProps = ComponentProps<typeof Link>;

export const InternalLink: React.FC<InternalLinkProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <Link {...restProps}>
      <ExternalLink>{children}</ExternalLink>
    </Link>
  );
};
