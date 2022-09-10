import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

type CommandInputStyles = {
  container: CSSObject;
};

const commandInputStyles = (theme: GlobalTheme): CommandInputStyles => ({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    backgroundColor: theme.colors.background,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    alignItems: "center",
    flexShrink: 1,
  },
});

export default commandInputStyles;
