import { GRID_SIZE } from "config/config";
import { RobotPosition } from "features/Robot/robotSlice";
import { TableTopSquareState } from "features/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { initTableTopSquares } from "./squareCalcs";

type TableTopHookResult = {
  tableTopSquares: TableTopSquareState[];
  setTableTopSquares: React.Dispatch<
    React.SetStateAction<TableTopSquareState[]>
  >;
  robotPosition: RobotPosition | null;
};

const useTableTop = (): TableTopHookResult => {
  const [squareSize, setSquareSize] = useState<number>(GRID_SIZE);
  const [tableTopSquares, setTableTopSquares] = useState<TableTopSquareState[]>(
    () => initTableTopSquares(squareSize)
  );
  const robotPosition = useSelector((state: AppState) => state.robot.position);

  useEffect(() => {
    setSquareSize(GRID_SIZE);
  }, []);

  return {
    tableTopSquares,
    setTableTopSquares,
    robotPosition,
  };
};

export default useTableTop;
