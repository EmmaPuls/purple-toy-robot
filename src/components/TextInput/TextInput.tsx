import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import { FC } from "react";
import { GlobalTheme } from "theme";
import textInputStyles from "./TextInput.style";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerStyles?: CSSObject;
  labelStyles?: CSSObject;
  inputStyles?: CSSObject;
}

const TextInput: FC<TextInputProps> = (props) => {
  const { label, containerStyles, labelStyles, inputStyles, ...rest } = props;
  const theme = useTheme() as GlobalTheme;
  const styles = textInputStyles(theme);

  return (
    <div className={css(containerStyles || styles.container)}>
      {label && (
        <label className={css(labelStyles || styles.label)} htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input className={css(inputStyles || styles.input)} {...rest} type={"text"}></input>
    </div>
  );
};

export default TextInput;
