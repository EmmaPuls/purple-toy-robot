import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { GlobalTheme } from "theme";
import commandStyles from "../Command.styles";
import HistoryEntry from "../HistoryEntry";

const CommandOutput: FC = () => {
  const theme = useTheme() as GlobalTheme;
  const styles = commandStyles(theme);
  const history = useSelector((state: AppState) => state.commands.history);

  return (
    <div className={css(styles.container)}>
      <label
        id="output-label"
        htmlFor="output-box"
        className={css(styles.label)}
      >
        Command Output
      </label>
      <div
        id="output-box"
        className={css(styles.border)}
        aria-labelledby="output-label"
      >
        {history.map((entry, index) => (
          <HistoryEntry entry={entry} key={`history-entry-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CommandOutput;
