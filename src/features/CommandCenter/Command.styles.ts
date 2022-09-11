import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

type CommandStyles = {
  container: CSSObject;
  border: CSSObject;
  label: CSSObject;
};

const commandStyles = (theme: GlobalTheme): CommandStyles => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    backgroundColor: theme.colors.background,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    alignContent: "left",
    minHeight: "3rem",
    flexShrink: 1,
    maxHeight: '16em',
    maxWidth: '74vmin',
  },
  border: {
    flex: 1,
    overflow: "auto",
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.spacing(0.5),
  },
  label: {
    color: theme.palette.primary.dark,
    display: "block",
    pointerEvents: "none",
    fontSize: theme.spacing(1.5),
    textAlign: "left",
    paddingInline: theme.spacing(0.5),
    position: 'absolute',
    backgroundColor: theme.colors.background,
    marginLeft: theme.spacing(1.25),
    transform: 'translateY(-50%)',
  },
});

export default commandStyles;
