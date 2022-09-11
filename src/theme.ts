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
  };
}

const globalTheme: GlobalTheme = {
  colors: {
    boardDark: "#B2f2EF",
    boardLight: "#EDFDFB",
    background: "#EFF7F6",
    playArea: "#F2B5D4",
    text: "#282c34",
  },
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: "#4e4187",
      contrastText: "#282c34",
      dark: "#302853",
      light: "#6150A5",
    },
    error: {
      main: "#9B1D20",
      contrastText: "#EFF7F6",
      dark: "#6A0003",
      light: "#D32F2F",
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
