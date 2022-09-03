export type GlobalTheme  = {
  colors: {
    blue: string;
    blueInactive: string;
    teal: string;
    tealInactive: string;
    pink: string;
    pinkInactive: string;
    background: string;
    text: string;
  };
};

const globalTheme: GlobalTheme = {
  colors: {
    blue: "#7BDFF2",
    blueInactive: "#ECFAFD",
    teal: "#B2f2EF",
    tealInactive: "#EDFDFB",
    background: "#EFF7F6",
    pink: "#F2B5D4",
    pinkInactive: "F7D6E0",
    text: '#282c34',
  },
};

export default globalTheme;
