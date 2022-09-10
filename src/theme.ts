import { createTheme, Theme } from "@mui/material";
import { merge } from "lodash";

const defaultTheme = createTheme();

export type GlobalTheme = {
  colors: {
    boardDark: string;
    boardLight: string;
    playArea: string;
    interaction: string;
    background: string;
    text: string;
    invertedText: string;
    error: string;
  };
  spacing: (multiplier: number) => string;
};

const myTheme: GlobalTheme = {
  colors: {
    boardDark: "#B2f2EF",
    boardLight: "#EDFDFB",
    background: "#EFF7F6",
    playArea: "#F2B5D4",
    interaction: "#e91e63",
    text: "#282c34",
    invertedText: "#EFF7F6",
    error: "#9B1D20",
  },
  spacing: (multiplier: number) => `${multiplier * 8}px`,
};

const theme: Theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: "#00bcd4",
      contrastText: myTheme.colors.text,
      dark: "#008394",
      light: "#33c9dc",
    },
    background: {
      ...defaultTheme.palette.background,
      paper: myTheme.colors.background,
    },
  },
  zIndex: {
    ...defaultTheme.zIndex,
    modal: 1000,
  },
};

const globalTheme = merge(theme, myTheme);

export default globalTheme;
