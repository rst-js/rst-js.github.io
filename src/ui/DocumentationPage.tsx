import * as React from "react"
import { Link } from "gatsby"

export default function DocumentationPage({ children }) {
  return (
    <>
      <nav>
        <Link to="/">rst.js.org</Link>
      </nav>
      {children}
    </>
  )
}
