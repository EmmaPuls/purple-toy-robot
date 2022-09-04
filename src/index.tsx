import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import globalTheme from "theme";
import App from "App";
import RootErrorBoundary from "features/ErrorBoundaries/RootErrorBoundary";

injectGlobal`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootErrorBoundary>
      <ThemeProvider theme={globalTheme}>
        <RootErrorBoundary themeLoaded>
          <App />
        </RootErrorBoundary>
      </ThemeProvider>
    </RootErrorBoundary>
  </React.StrictMode>
);
