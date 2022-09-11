import ForwardIcon from "@mui/icons-material/Forward";
import { RobotDirection } from "features/types";
import { FC } from "react";
import { useRobot } from "./useRobot";

const Forward: FC<{ robotDirection: RobotDirection }> = ({
  robotDirection,
}) => {
  const { transformRobot } = useRobot(robotDirection);

  return (
    <ForwardIcon
      sx={{
        width: "inherit",
        height: "inherit",
        transform: transformRobot,
      }}
    />
  );
};

export default Forward;
