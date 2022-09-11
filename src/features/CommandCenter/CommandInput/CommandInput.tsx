import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { GlobalTheme } from "theme";
import commandStyles from "../Command.styles";
import useCommandInput from "./useCommandInput";

/**
 * Functional component representing the command input box.
 */
const CommandInput: FC = () => {
  const theme = useTheme() as GlobalTheme;
  const styles = commandStyles(theme);
  const { handleSubmit, error, onChange, value } = useCommandInput();

  return (
    <div className={css(styles.container)}>
      <TextField
        id={"command-input"}
        label={"Command Input"}
        sx={{ flexGrow: 1 }}
        onKeyDown={(e) => handleSubmit(e.key)}
        error={error}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        inputProps={{
          style: {
            textTransform: "uppercase",
            fontFamily: "monospace",
            fontSize: "1.5rem",
          },
          "data-testid": "command-input",
        }}
        InputLabelProps={{
          style: {
            fontSize: "1.5rem",
            backgroundColor: theme.palette.background.paper,
            paddingInline: "0.5rem",
            paddingLeft: "0.3rem",
            lineHeight: "1.5rem",
          },
        }}
      />
    </div>
  );
};

export default CommandInput;
