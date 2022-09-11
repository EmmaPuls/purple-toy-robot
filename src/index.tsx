import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import { Provider as ReduxProvider } from "react-redux";
import myTheme from "theme";
import App from "App";
import AppErrorBoundary from "features/ErrorBoundaries/RootErrorBoundary";
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <ThemeProvider theme={myTheme}>
        <ReduxProvider store={store}>
          <AppErrorBoundary themeLoaded>
            <App />
          </AppErrorBoundary>
        </ReduxProvider>
      </ThemeProvider>
    </AppErrorBoundary>
  </React.StrictMode>
);
