export type GlobalTheme = {
  colors: {
    boardDark: string;
    boardLight: string;
    playArea: string;
    background: string;
    text: string;
    invertedText: string;
    error: string;
  };
};

const globalTheme: GlobalTheme = {
  colors: {
    boardDark: "#B2f2EF",
    boardLight: "#EDFDFB",
    background: "#EFF7F6",
    playArea: "#F2B5D4",
    text: "#282c34",
    invertedText: "#EFF7F6",
    error: "#9B1D20",
  },
};

export default globalTheme;
