import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { TableTopSquareState } from "TableTop/types";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";

type TableTopSquareProps = {
  state: TableTopSquareState;
  number: number;
};

const TableTopSquare: FC<TableTopSquareProps> = ({ state, number }) => {
  const theme = useTheme() as GlobalTheme;
  const styles = tableTopSquareStyles(theme, state.color);

  return (
    <div className={css(styles.square)} data-testid={`Square-${number}`}>
      <div className={css(styles.overlayContainer)}>
        <p className={css(styles.overlayText)}>{`${state.row}, ${state.column}`}</p>
      </div>
    </div>
  );
};

export default TableTopSquare;
