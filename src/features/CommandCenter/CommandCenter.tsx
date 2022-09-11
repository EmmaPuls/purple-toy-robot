import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { GlobalTheme } from "theme";
import CommandInput from "./CommandInput";
import CommandOutput from "./CommandOutput";

/**
 * Functional component representing the command input and output.
 */
const CommandCenter: FC = () => {
  const theme = useTheme() as GlobalTheme;
  return (
    <div
      className={css({
        display: "flex",
        gap: theme.spacing(2),
        flexDirection: "column",
      })}
    >
      <CommandInput />
      <CommandOutput />
    </div>
  );
};

export default CommandCenter;
