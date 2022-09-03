import { CSSObject } from "@emotion/css";
import { GlobalTheme } from "theme";

type TableTopStyles = {
  container: CSSObject;
  tableTop: CSSObject;
};

const tableTopStyles = (theme: GlobalTheme): TableTopStyles => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    height: "80vh",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme.colors.playArea,
  },
  tableTop: {
    position: 'relative',
    border: '10px',
    borderColor: theme.colors.boardDark,
    borderStyle: 'solid',
    padding: '10px',
    display: "grid",
    gap: "10px",
    width: '75vmin',
    height: '75vmin',
    borderRadius: "10px",
    gridTemplate: "1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr",
  },
});



export default tableTopStyles;
