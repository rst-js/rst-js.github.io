import * as React from "react"

interface PreviewErrorBoundaryState {
  hasError: boolean
}

export default class PreviewErrorBoundary extends React.Component<
  {},
  PreviewErrorBoundaryState
> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return null

    return this.props.children
  }
}
