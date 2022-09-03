export type GlobalTheme  = {
  colors: {
    boardDark: string;
    boardLight: string;
    playArea: string;
    background: string;
    text: string;
  };
};

/**
 * Some adjustments may be needed to improve contrast between board and playArea
 */
const globalTheme: GlobalTheme = {
  colors: {
    boardDark: "#B2f2EF",
    boardLight: "#EDFDFB",
    background: "#EFF7F6",
    playArea: "#F2B5D4",
    text: '#282c34',
  },
};

export default globalTheme;
