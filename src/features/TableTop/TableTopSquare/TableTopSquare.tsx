import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC, useMemo } from "react";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";
import Popover from "@mui/material/Popover";
import useDescriptionPopover from "./useDescriptionPopover";
import ForwardIcon from "@mui/icons-material/Forward";
import { GRID_SIZE } from "config/config";
import { Direction, TableTopSquareState } from "features/types";

type TableTopSquareProps = {
  state: TableTopSquareState;
  number: number;
};

const directionMap: Record<Direction, string> = {
  [Direction.NORTH]: 'rotate(270deg)',
  [Direction.SOUTH]: 'rotate(90deg)',
  [Direction.EAST]: 'rotate(0deg)',
  [Direction.WEST]: 'rotate(180deg)',
}

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
        <ForwardIcon
          sx={{
            width: "inherit",
            height: "inherit",
            transform: directionMap[Direction.WEST],
          }}
        />
      </div>
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
