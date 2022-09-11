import { RobotDirection } from "features/types";
import { useEffect, useState } from "react";

type useRobotResult = {
  transformRobot: string;
};

export const directionMap = {
  [RobotDirection.NORTH]: "rotate(0deg)",
  [RobotDirection.SOUTH]: "rotate(180deg)",
  [RobotDirection.EAST]: "rotate(90deg)",
  [RobotDirection.WEST]: "rotate(270deg)",
};

export const useRobot = (direction: RobotDirection): useRobotResult => {
  const [transformRobot, setTransformRobot] = useState<string>("");

  useEffect(() => {
    console.log("direction", direction);
    console.log("directionMap", directionMap[direction as RobotDirection]);
    setTransformRobot(directionMap[direction]);
  }, [direction]);

  return {
    transformRobot: transformRobot,
  };
};
