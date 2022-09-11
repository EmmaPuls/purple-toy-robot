import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

type ErrorPageStyles = {
  container: CSSObject;
  page: CSSObject;
  body: CSSObject;
  header: CSSObject;
};

export const errorPageStyles = (theme: GlobalTheme): ErrorPageStyles => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "97vmin",
    height: "60vmin",
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(1.25),
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    textAlign: "center",
  },
  page: {
    backgroundColor: theme.colors.background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  body: {
    fontSize: "1.2em",
  },
  header: {
    whiteSpace: "pre-wrap",
  },
});
