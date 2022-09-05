import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import { FC, HTMLProps } from "react";
import { GlobalTheme } from "theme";
import readOnlyTextAreaStyle from "./ReadOnlyTextArea.style";

type ReadOnlyTextAreaProps = {
  label?: string;
  hideLabel?: boolean;
  contents?: string[];
  labelStyles?: CSSObject;
  containerStyles?: CSSObject;
  textAreaStyles?: CSSObject;
};

const ReadOnlyTextArea: FC<
  ReadOnlyTextAreaProps & HTMLProps<HTMLTextAreaElement>
> = ({
  contents = [],
  label,
  hideLabel = true,
  labelStyles,
  containerStyles,
  textAreaStyles,
  ...props
}) => {
  const value = contents.join("\n");
  const theme = useTheme() as GlobalTheme;
  const styles = readOnlyTextAreaStyle(theme);

  return (
    <div className={css(styles.container, containerStyles)}>
      {label && (
        <label
          className={css(hideLabel ? styles.hiddenLabel : {}, labelStyles)}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={css(styles.textArea, textAreaStyles)}
        value={value}
        readOnly
      />
    </div>
  );
};

export default ReadOnlyTextArea;
