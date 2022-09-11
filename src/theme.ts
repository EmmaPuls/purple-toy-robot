import { createTheme, Theme } from "@mui/material";

const defaultTheme = createTheme();

export type GlobalTheme = Theme & MyTheme;

export interface MyTheme {
  colors: {
    boardDark: string;
    boardLight: string;
    playArea: string;
    background: string;
    text: string;
    invertedText: string;
    error: string;
  };
}

const globalTheme: GlobalTheme  = {
  colors: {
    boardDark: "#B2f2EF",
    boardLight: "#EDFDFB",
    background: "#EFF7F6",
    playArea: "#F2B5D4",
    text: "#282c34",
    invertedText: "#EFF7F6",
    error: "#9B1D20",
  },
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: "#00bcd4",
      contrastText: "#282c34",
      dark: "#008394",
      light: "#33c9dc",
    },
    background: {
      ...defaultTheme.palette.background,
      paper: "#EFF7F6",
    },
  },
  zIndex: {
    ...defaultTheme.zIndex,
    modal: 1000,
  },
};

export default globalTheme;
