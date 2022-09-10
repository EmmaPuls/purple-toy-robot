import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { GlobalTheme } from "theme";
import commandInputStyles from "./CommandInput.styles";
import useCommandInput from "./useCommandInput";

const CommandInput: FC = () => {
  const theme = useTheme() as GlobalTheme;
  const styles = commandInputStyles(theme);
  const { handleSubmit, error, onChange, value } = useCommandInput();

  return (
    <div className={css(styles.container)}>
      <TextField
        id={"command-input"}
        label={"Command Input"}
        sx={{ flexGrow: 1 }}
        onKeyDown={handleSubmit}
        error={error}
        value={value}
        onChange={onChange}
        inputProps={{ style: { textTransform: "uppercase", fontFamily: 'monospace' } }}
      />
    </div>
  );
};

export default CommandInput;
