import { Theme, ThemeProvider } from "@emotion/react";
import { defaultTo } from "lodash";
import React, { FC } from 'react';
import myTheme from "../theme";

type MockedProviderContainerProps = {
  theme?: Theme;
  children: React.ReactNode;
};

const MockedProviderContainer: FC<MockedProviderContainerProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={defaultTo(theme, myTheme)}>
      {children}
    </ThemeProvider>
  );
};

export default MockedProviderContainer;
