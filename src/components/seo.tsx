import React, { useMemo } from "react"
import { Helmet } from "react-helmet"

type Meta = {
  name?: string
  property?: string
  content: string
}

type Props = {
  title: string
  description?: string
  lang?: string
}

const SEO: React.FC<Props> = ({ description, title }) => {
  const metaDescription = description ?? "Kristian's site"

  const metaValues: Meta[] = useMemo(
    () => [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: "ksakarisson",
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ],
    [metaDescription, title]
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={metaValues}
    />
  )
}

export default SEO
