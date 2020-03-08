import React from "react"
import styled from "styled-components"

import * as Typography from "../Typography"
import { MarkdownRemarkFrontmatter } from "../../generated/graphql"
import Color from "../../style/Color"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Date = styled(Typography.Body)`
  color: ${Color.TEXT_SECONDARY};
  margin-right: 16px;
`

type Props = {
  frontmatter?: MarkdownRemarkFrontmatter | null
}

const BlogConnection: React.FC<Props> = ({ frontmatter }) => {
  if (!frontmatter?.title || !frontmatter?.path || !frontmatter?.date) {
    return null
  }

  const { title, path, date } = frontmatter

  return (
    <Container>
      <Date>{date}</Date>
      <Typography.InternalLink to={path}>{title}</Typography.InternalLink>
    </Container>
  )
}

export default BlogConnection
