import { RobotPosition } from "features/Robot/robotSlice";
import { TableTopSquareState } from "features/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { initTableTopSquares } from "./squareCalcs";

type TableTopHookResult = {
  tableTopSquares: TableTopSquareState[];
  setTableTopSquares: React.Dispatch<
    React.SetStateAction<TableTopSquareState[]>
  >;
  robotPosition?: RobotPosition;
};

const useTableTop = (): TableTopHookResult => {
  const [tableTopSquares, setTableTopSquares] = useState<TableTopSquareState[]>(
    () => initTableTopSquares()
  );
  const robotPosition = useSelector((state: AppState) => state.robot.position);

  return {
    tableTopSquares,
    setTableTopSquares,
    robotPosition,
  };
};

export default useTableTop;
