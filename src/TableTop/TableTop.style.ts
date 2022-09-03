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
    width: "80%",
    height: "80vh",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme.colors.pink,
  },
  tableTop: {
    position: 'relative',
    border: '10px',
    borderColor: theme.colors.teal,
    borderStyle: 'solid',
    padding: '10px',
    display: "grid",
    gap: "10px",
    width: '50vh',
    height: '50vh',
    borderRadius: "10px",
    gridTemplate: "1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr",
  },
});



export default tableTopStyles;
