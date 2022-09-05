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
    borderRadius: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    height: "80vh",
    justifyContent: "center",
    padding: theme.spacing(2),
    width: "80vw"
  },
  tableTop: {
    border: theme.spacing(1),
    borderColor: theme.colors.boardDark,
    borderRadius: theme.spacing(1),
    borderStyle: 'solid',
    display: "grid",
    gap: theme.spacing(1),
    gridAutoFlow: "row",
    gridTemplate: `${stringOfColOrRowSizes} / ${stringOfColOrRowSizes}`,
    height: '75vmin',
    padding: theme.spacing(1),
    position: 'relative',
    width: '75vmin'
  },
});



export default tableTopStyles;
