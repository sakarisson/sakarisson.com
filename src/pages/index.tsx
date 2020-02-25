import React from "react"
import styled from "styled-components"

import * as S from "../style/Styles"
import Layout from "../components/layout"
import * as Typography from "../components/Typography"

const Heading = styled(Typography.Heading)`
  margin: 24px 0px 12px;
`

const Paragraph = styled(Typography.Paragraph)``

const IndexPage = () => (
  <Layout>
    <Heading>About me</Heading>
    <Paragraph>
      Hi, my name is Kristian. I am a software engineer living in Helsinki,
      Finland.
    </Paragraph>
    <Paragraph>
      I am currently working at <S.Link href="https://wolt.com/">Wolt</S.Link>{" "}
      where I develop frontend solutions using modern TypeScript.
    </Paragraph>
    <Paragraph>
      I am a huge fan of React and its ecosystem and I like to explore and learn
      new technologies. In the past few years I've been specializing in React
      Native, where I am especially interested in creating beautiful and
      performant interactions and animations.
    </Paragraph>
    <Paragraph>I have also been into powerlifting since 2011.</Paragraph>
    <Paragraph>
      In the past I have worked as a GIS consultant and a web consultant, and I
      have always had a special place in my heart for all things JavaScript.
    </Paragraph>
    <Heading>Internet</Heading>
    <Paragraph>
      If you are interested in some of my code, feel free to check out my{" "}
      <S.Link href="https://github.com/Sakarisson/">GitHub profile</S.Link>.
    </Paragraph>
    <Paragraph>
      To see a wall of basically nothing but retweets, go ahead and follow me on{" "}
      <S.Link href="https://twitter.com/ksakarisson">Twitter</S.Link>.
    </Paragraph>
    <Paragraph>
      If you would like to connect professionally, connect with me on{" "}
      <S.Link href="https://www.linkedin.com/in/kristiansakarisson/">
        LinkedIn
      </S.Link>{" "}
      or just <S.Link href="mailto: kristian@sakarisson.com">email me</S.Link>.
    </Paragraph>
  </Layout>
)

export default IndexPage
