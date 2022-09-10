import { CSSObject } from "@emotion/css";
import { GlobalTheme } from "theme";

type AppStyles = {
    app: CSSObject;
    container: CSSObject;
    header: CSSObject;
    body: CSSObject;
} 

const appStyles = (theme: GlobalTheme): AppStyles =>
({
  app: {
    backgroundColor: theme.colors.background,
    textAlign: "center",
    minHeight: "100vh",
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.playArea,
    borderRadius: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: theme.spacing(2),
    minHeight: "80vh",
    justifyContent: "center",
    padding: theme.spacing(2),
    minWidth: "80vw",
    margin: theme.spacing(2),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.text,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default appStyles;