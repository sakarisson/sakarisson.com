import styled from "styled-components"
import { Link } from "gatsby"
import Color from "../style/Color"

const HEADING_FONT = "Montserrat, sans-serif"
const BODY_FONT = '"Merriweather", "Georgia", serif'

export const Title = styled.h1<{ hasMargin?: boolean }>`
  color: ${Color.TEXT_HIGHLIGHT};
  margin: ${({ hasMargin }) => (hasMargin ? "24px 0px 12px" : "auto")};
  font-family: ${HEADING_FONT};
  font-size: 28px;
  font-weight: 700;
`

export const Heading = styled.h2`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${HEADING_FONT};
  font-size: 24px;
  font-weight: 700;
`

export const Subheading = styled.h3`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${HEADING_FONT};
  font-size: 18px;
  font-weight: bold;
`

export const Body = styled.p`
  color: ${Color.TEXT_PRIMARY};
  font-family: ${BODY_FONT};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`

export const Small = styled.p`
  color: ${Color.TEXT_PRIMARY};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

export const ExternalLink = styled.a`
  color: ${Color.TEXT_HIGHLIGHT};
`

export const InternalLink = styled(Link)`
  color: ${Color.TEXT_HIGHLIGHT};
  font-family: ${BODY_FONT};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`
