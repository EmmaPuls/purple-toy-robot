import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";

type TableTopSquareProps = {
  color: string;
  number: number;
};

const TableTopSquare: FC<TableTopSquareProps> = ({ color, number }) => {
  const theme = useTheme() as GlobalTheme;
  const styles = tableTopSquareStyles(theme, color);

  return (
    <div className={css(styles.square)} data-testid={`Square-${number}`}>
    </div>
  );
};

export default TableTopSquare;
