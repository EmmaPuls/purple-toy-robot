import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { TableTopSquareState } from "features/TableTop/types";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";
import Popover from "@mui/material/Popover";
import useDescriptionPopover from "./useDescriptionPopover";

type TableTopSquareProps = {
  state: TableTopSquareState;
  number: number;
};

const TableTopSquare: FC<TableTopSquareProps> = ({ state, number }) => {
  const theme = useTheme() as GlobalTheme;
  const styles = tableTopSquareStyles(theme, state.color);
  const {
    handleDescriptionOpen,
    handleDescriptionClose,
    open,
    squareDescription,
  } = useDescriptionPopover();

  return (
    <>
      <div
        className={css(styles.square)}
        data-testid={`Square-${number}`}
        aria-owns={open ? "square-description" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleDescriptionOpen}
        onMouseLeave={handleDescriptionClose}
      ></div>
      <Popover
        id="square-description"
        open={open}
        anchorEl={squareDescription}
        className={css(styles.description)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableRestoreFocus
      >{`${state.row}, ${state.column}`}</Popover>
    </>
  );
};

export default TableTopSquare;
