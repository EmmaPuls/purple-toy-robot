import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import { Provider as ReduxProvider } from "react-redux/";
import myTheme from "theme";
import App from "App";
import ErrorBoundary from "features/ErrorBoundaries/RootErrorBoundary";
import { store } from "store";

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

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={myTheme}>
        <ReduxProvider store={store}>
          <ErrorBoundary themeLoaded>
            <App />
          </ErrorBoundary>
        </ReduxProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
