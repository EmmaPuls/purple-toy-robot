import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

export type ReadOnlyTextAreaStyles = {
  textArea: CSSObject;
  hiddenLabel: CSSObject;
  container: CSSObject;
};

const readOnlyTextAreaStyle = (theme: GlobalTheme): ReadOnlyTextAreaStyles => ({
  container: {
    display: "flex",
    flex: 1,
  },
  hiddenLabel: {
    position: "absolute",
    width: theme.spacing(1),
    height: theme.spacing(1),
    padding: theme.spacing(0),
    margin: theme.spacing(-1),
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
  textArea: {
    flex: 1,
    resize: "none",
    color: theme.colors.text,
    fontSize: "1.4rem",
    lineHeight: "2.2rem",
    fontFamily: "monospace",
    backgroundColor: theme.colors.background,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: "none",
    outlineColor: theme.colors.interaction,
    flexGrow: 1,
    cursor: "pointer",
  },
});

export default readOnlyTextAreaStyle;
