import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { GlobalTheme } from "theme";
import commandStyles from "../Command.styles";
import useCommandInput from "./useCommandInput";

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
          style: { textTransform: "uppercase", fontFamily: "monospace" },
        }}
      />
    </div>
  );
};

export default CommandInput;
