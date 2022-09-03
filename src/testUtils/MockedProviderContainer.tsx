import { Theme, ThemeProvider } from "@emotion/react";
import { defaultTo } from "lodash";
import React, { FC } from 'react';
import globalTheme from "../theme";

type MockedProviderContainerProps = {
  theme?: Theme;
  children: React.ReactNode;
};

const MockedProviderContainer: FC<MockedProviderContainerProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={defaultTo(theme, globalTheme)}>
      {children}
    </ThemeProvider>
  );
};

export default MockedProviderContainer;
