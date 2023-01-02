import styled, { css } from 'styled-components';
import Link from 'next/link';
import Color from '../style/Color';

const HEADING_FONT = 'helvetica neue, helvetica, sans-serif';
const BODY_FONT = '"Roboto Mono", monospace';

export const Title = styled.h1`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 48px;
  line-height: 54px;
  font-weight: 700;
`;

export const Heading = styled.h2`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 42px;
  line-height: 48px;
  font-weight: 700;
`;

export const Subheading = styled.h3`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${HEADING_FONT};
  font-size: 28px;
  font-weight: bold;
`;

const SharedBodyStyles = css`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${BODY_FONT};
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
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

export const InlineCode = styled.code`
  ${SharedBodyStyles}
  background-color: ${Color.CODE_BACKGROUND};
  border-radius: 6px;
  overflow-wrap: break-word;
  box-sizing: border-box;
  padding: 0px 2px;
`;

export const Hyperlink = styled(Link)`
  ${SharedBodyStyles};
  color: ${Color.TEXT_HIGHLIGHT};
`;
