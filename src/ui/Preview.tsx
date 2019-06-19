import * as React from "react"
import { parse } from "@rst-js/parser"
import * as rst from "@rst-js/react"

interface PreviewProps {
  source: string
  output: "jsx" | "ast"
}

export default function Preview({ source, output = "jsx" }: PreviewProps) {
  let ast
  try {
    ast = parse(source)
  } catch (e) {
    return <span>{e.message}</span>
  }

  if (output === "jsx") {
    return <RST {...ast} />
  } else if (output === "ast") {
    return <pre>{JSON.stringify(ast, null, 2)}</pre>
  }
}

const componentName = value =>
  value.replace(/(^|_)(\w)/g, (match, p1, p2) => p2.toUpperCase())

function RST({ type, children, ...props }) {
  if (children == null) return props.value

  const component = rst[componentName(type)]
  if (component == null) return null

  return React.createElement(
    component,
    props,
    children.map((ast, index) => <RST key={index} {...ast} />)
  )
}
