import React, { useMemo } from "react"
import styled from "styled-components"
import { format } from "date-fns"

import * as Typography from "../Typography"
import { MarkdownRemarkFrontmatter } from "../../generated/graphql"
import Color from "../../style/Color"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const DateContainer = styled(Typography.Body)`
  color: ${Color.TEXT_SECONDARY};
  margin-right: 16px;
`

const formatDate = (date: string) => format(new Date(date), "dd MMM yyyy")

type Props = {
  frontmatter?: MarkdownRemarkFrontmatter | null
}

const BlogConnection: React.FC<Props> = ({ frontmatter }) => {
  if (!frontmatter?.title || !frontmatter?.path || !frontmatter?.date) {
    return null
  }

  const { title, path, date } = frontmatter

  const formattedDate = useMemo(() => formatDate(date), [date])

  return (
    <Container>
      <DateContainer>{formattedDate}</DateContainer>
      <Typography.InternalLink to={path}>{title}</Typography.InternalLink>
    </Container>
  )
}

export default BlogConnection
