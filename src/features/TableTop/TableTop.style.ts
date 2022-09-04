import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config";
import { GlobalTheme } from "theme";

type TableTopStyles = {
  container: CSSObject;
  tableTop: CSSObject;
};

const stringOfColOrRowSizes = new Array(GRID_SIZE).fill('1fr').join(' ');

const tableTopStyles = (theme: GlobalTheme): TableTopStyles => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.playArea,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    justifyContent: "center",
    padding: "20px",
    width: "80vw"
  },
  tableTop: {
    border: '10px',
    borderColor: theme.colors.boardDark,
    borderRadius: "10px",
    borderStyle: 'solid',
    display: "grid",
    gap: "10px",
    gridAutoFlow: "row",
    gridTemplate: `${stringOfColOrRowSizes} / ${stringOfColOrRowSizes}`,
    height: '75vmin',
    padding: '10px',
    position: 'relative',
    width: '75vmin'
  },
});



export default tableTopStyles;
