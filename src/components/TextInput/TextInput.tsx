import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import { FC } from "react";
import { GlobalTheme } from "theme";
import inputStyles from "./TextInput.style";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerStyles?: CSSObject;
  labelStyles?: CSSObject;
  inputStyles?: CSSObject;
}

const TextInput: FC<TextInputProps> = (props) => {
  const { label, ...rest } = props;
  const theme = useTheme() as GlobalTheme;
  const styles = inputStyles(theme);

  return (
    <div className={css(styles.container)}>
      {label && (
        <label className={css(styles.label)} htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input className={css(styles.input)} {...rest} type={"text"}></input>
    </div>
  );
};

export default TextInput;
