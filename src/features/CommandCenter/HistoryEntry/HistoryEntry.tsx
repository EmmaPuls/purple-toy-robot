import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import { Divider } from "@mui/material";
import { FC } from "react";
import { GlobalTheme } from "theme";
import { EntryType, HistoryEntry as HistoryEntryType } from "../commandSlice";
import historyEntryStyles, { HistoryEntryStyles } from "./HistoryEntry.styles";

type HistoryEntryProps = {
  entry: HistoryEntryType;
};

type StyleMap = {
  [key in EntryType]: CSSObject;
};

const styleMap = (styles: HistoryEntryStyles): StyleMap => ({
  [EntryType.COMMAND]: styles.command,
  [EntryType.ERROR]: styles.error,
  [EntryType.RESULT]: styles.result,
});

const HistoryEntry: FC<HistoryEntryProps> = ({ entry }) => {
  const theme = useTheme() as GlobalTheme;
  const styles = historyEntryStyles(theme);

  return (
    <>
      <div
        className={css({ ...styles.entry, ...styleMap(styles)[entry.type] })}
      >
        {entry.value.split("\n").map((line, index) => (
          <p className={css(styles.groupedLines)} key={`entry-line-${index}`}>
            {line}
          </p>
        ))}
      </div>
      <Divider />
    </>
  );
};

export default HistoryEntry;
