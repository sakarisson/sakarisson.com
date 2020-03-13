import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import * as Typography from "../components/Typography"

const Heading = styled(Typography.Heading).attrs(() => ({
  hasMargin: true,
}))``
const { Body } = Typography

const Blame = styled.span`
  color: red;
`

const NotFoundPage = () => (
  <Layout>
    <Heading>NOT FOUND</Heading>
    <Body>
      You just hit a route that doesn't exist. This is your fault.{" "}
      <Blame>Stop it.</Blame>
    </Body>
  </Layout>
)

export default NotFoundPage
