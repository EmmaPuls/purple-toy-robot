import { CSSObject } from "@emotion/css";
import { GlobalTheme } from "./theme";

type AppStyles = {
    app: CSSObject;
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