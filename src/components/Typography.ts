import styled from "styled-components"
import { Link } from "gatsby"
import Color from "../style/Color"

export const Title = styled.h1`
  color: ${Color.TEXT_HIGHLIGHT};
`

export const Body = styled.p`
  color: ${Color.TEXT_PRIMARY};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`

export const Small = styled.p`
  color: ${Color.TEXT_PRIMARY};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`

export const Heading = styled.h2<{ hasMargin?: boolean }>`
  color: ${Color.TEXT_HIGHLIGHT};
  margin: ${({ hasMargin }) => (hasMargin ? "24px 0px 12px" : "auto")};
  font-weight: bold;
`

export const ExternalLink = styled.a`
  color: ${Color.TEXT_HIGHLIGHT};
`

export const InternalLink = styled(Link)`
  color: ${Color.TEXT_HIGHLIGHT};
`
