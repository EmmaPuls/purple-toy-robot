import { Theme, ThemeProvider } from "@emotion/react";
import defaultTo from "lodash/defaultTo";
import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";
import myTheme from "../theme";

type MockedProviderContainerProps = {
  theme?: Theme;
  children: React.ReactNode;
};

/**
 * MockedProvider with theme and redux store for testing.
 */
const MockedProviderContainer: FC<MockedProviderContainerProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={defaultTo(theme, myTheme)}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ThemeProvider>
  );
};

export default MockedProviderContainer;
