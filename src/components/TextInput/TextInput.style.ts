import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

type TextInputStyles = {
  container: CSSObject;
  input: CSSObject;
  label: CSSObject;
};

const textInputStyles = (theme: GlobalTheme): TextInputStyles => ({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.colors.background,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    alignItems: "center",
  },
  input: {
    position: "relative",
    borderColor: theme.colors.text,
    borderRadius: theme.spacing(1),
    fontSize: "2rem",
    textTransform: "uppercase",
    padding: theme.spacing(1),
    fontFamily: "monospace",
    outlineColor: theme.colors.interaction,
  },
  label: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
});

export default textInputStyles;
