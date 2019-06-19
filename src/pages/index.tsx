import * as React from "react"
import styled from "@emotion/styled"

import { Container } from "ui/Container"
import { grey, media } from "ui/styles"
import { Link } from "gatsby"
import { GitHub } from "ui/icons"
import Preview from "ui/Preview"
import PreviewErrorBoundary from "ui/PreviewErrorBoundary"

export default () => {
  const [source, setSource] = React.useState(exampleSource)
  const handleSourceChange = e => setSource(e.target.value)

  return (
    <>
      <Card>
        <HeroContainer>
          <Logo aria-hidden>reST</Logo>

          <Heading>reStructuredText for JavaScript</Heading>

          <Link to="/docs/">Documentation</Link>
        </HeroContainer>
      </Card>

      <Demo>
        <h2>Extensible markup language</h2>
        <Card>
          <textarea value={source} onChange={handleSourceChange} />
        </Card>

        <h2>Rendered as React component</h2>

        <Card>
          <PreviewErrorBoundary>
            <Preview source={source} output="jsx" />
          </PreviewErrorBoundary>
        </Card>
      </Demo>

      <Footer>
        <span>"reStructuredText" is ONE word, not two</span>
        <Link to="https://github.com/rst-js/rst-js">
          <GitHub /> GitHub
        </Link>
      </Footer>
    </>
  )
}

const Card = styled.div`
  background-color: #fff;
`

const HeroContainer = styled(Container)`
  padding: 24px;
  margin-bottom: 24px;
  display: grid;
  grid-row-gap: 48px;

  ${media.sm`
    padding: 64px;
    grid-row-gap: 64px;
  `}

  justify-items: center;
`

const Heading = styled.h1`
  font-size: 24px;
  line-height: 1.4;
  text-align: center;
`

const Logo = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-size: 40px;
  font-weight: bold;
  text-align: right;

  background-color: #f8e100;
`

const Demo = styled(Container)`
  display: grid;

  ${media.sm`
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 24px;
    grid-row-gap: 16px;
  `}

  h2 {
    font-weight: bold;
    line-height: 2;
  }

  pre {
    padding: 24px;
    font-family: monospace;
    line-height: 1.5;
    color: ${grey["800"]};
    white-space: pre-wrap;
  }
`

const Footer = styled.footer`
  margin: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 2;

  color: ${grey["600"]};

  a {
    display: block;
    text-decoration: none;
    color: ${grey["800"]};
  }
`

const exampleSource = `===============================
reStructuredText for JavaScript
===============================

reStructuredText is an easy-to-read, what-you-see-is-what-you-get plaintext markup syntax \
and parser system. It is useful for in-line code documentation, \
for quickly creating simple web pages, and for standalone documents. reStructuredText is \
designed for extensibility for specific application domains.
`
