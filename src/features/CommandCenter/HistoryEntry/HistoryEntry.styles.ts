import { CSSObject } from "@emotion/react";
import { GlobalTheme } from "theme";

export type HistoryEntryStyles = {
  error: CSSObject;
  command: CSSObject;
  result: CSSObject;
  entry: CSSObject;
  groupedLines: CSSObject;
};

const historyEntryStyles = (theme: GlobalTheme): HistoryEntryStyles => ({
  error: {
    color: theme.palette.error.main,
  },
  command: {},
  result: {},
  entry: {
    fontFamily: 'monospace',
    paddingInline: theme.spacing(1),
    fontSize: '1em',
    lineHeight: '1.5em',
    textAlign: 'left',
    textWrap: 'normal',
  },
  groupedLines: {
    lineHeight: '1em',
  }
});

export default historyEntryStyles;
