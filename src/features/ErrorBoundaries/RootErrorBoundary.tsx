import { css } from "@emotion/css";
import defaultTo from "lodash/defaultTo";
import { Component, ErrorInfo, ReactNode } from "react";
import ErrorPage from "./ErrorPage";

interface Props {
  children: ReactNode;
  themeLoaded?: boolean;
}

interface State {
  hasError: boolean;
  themeLoaded: boolean;
  title: string;
  body: string;
}

/**
 * Component representing an error boundary.
 * Can render if theme is not available.
 * Will render with styles if theme is available.
 */
class RootErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    themeLoaded: false,
    title: "Oh no!\nSomething went wrong",
    body: "Reload the page to continue",
  };

  constructor(props: Props) {
    super(props);
    this.state.themeLoaded = defaultTo(props.themeLoaded, false);
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.state.themeLoaded) {
        return (
          <ErrorPage
            title={this.state.title}
            body={this.state.body}
            themed={this.state.themeLoaded}
          />
        );
      } else {
        return (
          <>
            <h1 className={css(`padding-left:20px; white-space:pre-wrap`)}>{this.state.title}</h1>
            <p className={css(`padding-left:20px`)}>{this.state.body}</p>
          </>
        );
      }
    }

    return this.props.children;
  }
}

export default RootErrorBoundary;
