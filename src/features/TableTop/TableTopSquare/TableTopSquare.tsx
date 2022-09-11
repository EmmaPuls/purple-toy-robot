import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC, useMemo } from "react";
import { GlobalTheme } from "theme";
import tableTopSquareStyles from "./TableTopSquare.style";
import Popover from "@mui/material/Popover";
import useDescriptionPopover from "./useDescriptionPopover";
import { GRID_SIZE } from "config/config";
import { RobotDirection, TableTopSquareState } from "features/types";
import Forward from "features/Robot";

type TableTopSquareProps = {
  state: TableTopSquareState;
  number: number;
  hasRobot: boolean;
  robotDirection?: RobotDirection;
};

const TableTopSquare: FC<TableTopSquareProps> = ({
  state,
  number,
  hasRobot,
  robotDirection,
}) => {
  const theme = useTheme() as GlobalTheme;
  const squareDimension = useMemo(() => Math.floor(100 / GRID_SIZE), []);
  const styles = tableTopSquareStyles(theme, state.color, squareDimension);
  const {
    handleDescriptionOpen,
    handleDescriptionClose,
    open,
    squareDescription,
  } = useDescriptionPopover();

  const canRenderRobot = hasRobot && robotDirection;

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
        {canRenderRobot && <Forward robotDirection={robotDirection} />}
      </div>
      <Popover
        data-testid={`Popover-${number}`}
        id="square-description"
        open={open}
        anchorEl={squareDescription}
        PaperProps={{ className: css(styles.paper) }}
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
