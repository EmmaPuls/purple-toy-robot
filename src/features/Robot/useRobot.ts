import { RobotDirection } from "features/types";
import { useEffect, useState } from "react";

type useRobotResult = {
  transformRobot: string;
};

export const directionMap = {
  [RobotDirection.NORTH]: "rotate(270deg)",
  [RobotDirection.SOUTH]: "rotate(90deg)",
  [RobotDirection.EAST]: "rotate(0deg)",
  [RobotDirection.WEST]: "rotate(180deg)",
};

export const useRobot = (direction: RobotDirection): useRobotResult => {
  const [transformRobot, setTransformRobot] = useState<string>("");

  useEffect(() => {
    setTransformRobot(directionMap[direction]);
  }, [direction]);

  return {
    transformRobot: transformRobot,
  };
};
