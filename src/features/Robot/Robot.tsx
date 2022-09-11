import ForwardIcon from "@mui/icons-material/Forward";
import { Direction } from "features/types";
import { FC } from "react";

const directionMap: Record<Direction, string> = {
  [Direction.NORTH]: "rotate(270deg)",
  [Direction.SOUTH]: "rotate(90deg)",
  [Direction.EAST]: "rotate(0deg)",
  [Direction.WEST]: "rotate(180deg)",
};

const Forward: FC<{ direction: Direction }> = ({ direction }) => {
  return (
    <ForwardIcon
      sx={{
        width: "inherit",
        height: "inherit",
        transform: directionMap[direction],
      }}
    />
  );
};

export default Forward;
