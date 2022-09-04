import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

type InputStyles = {
  container: CSSObject;
  input: CSSObject;
  label: CSSObject;
};

const inputStyles = (theme: GlobalTheme): InputStyles => ({
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
    flexGrow: 1,
    borderColor: theme.colors.text,
    borderRadius: theme.spacing(0.5),
    fontSize: "2rem",
    textTransform: "uppercase",
  },
  label: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

export default inputStyles;
