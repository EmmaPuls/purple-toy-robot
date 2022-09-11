import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC, useMemo } from "react";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";
import Popover from "@mui/material/Popover";
import useDescriptionPopover from "./useDescriptionPopover";
import { GRID_SIZE } from "config/config";
import { Direction, TableTopSquareState } from "features/types";
import Forward from "features/Robot";

type TableTopSquareProps = {
  state: TableTopSquareState;
  number: number;
};

const TableTopSquare: FC<TableTopSquareProps> = ({ state, number }) => {
  const theme = useTheme() as GlobalTheme;
  const squareDimension = useMemo(() => Math.floor(100 / GRID_SIZE), []);
  const styles = tableTopSquareStyles(theme, state.color, squareDimension);
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
      >
        <Forward direction={Direction.NORTH} />
      </div>
      <Popover
        id="square-description"
        open={open}
        anchorEl={squareDescription}
        PaperProps={{className: css(styles.paper)}}
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
