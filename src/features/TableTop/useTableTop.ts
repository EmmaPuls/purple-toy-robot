import { GRID_SIZE } from "config/config";
import { TableTopSquareState } from "features/types";
import { useEffect, useState } from "react";
import { initTableTopSquares } from "./squareCalcs";

type TableTopHookResult = {
  tableTopSquares: TableTopSquareState[];
  setTableTopSquares: React.Dispatch<
    React.SetStateAction<TableTopSquareState[]>
  >;
};

const useTableTop = (): TableTopHookResult => {
  const [squareSize, setSquareSize] = useState<number>(GRID_SIZE);
  const [tableTopSquares, setTableTopSquares] = useState<TableTopSquareState[]>(
    () => initTableTopSquares(squareSize)
  );

  useEffect(() => {
    setSquareSize(GRID_SIZE);
  }, []);

  return {
    tableTopSquares,
    setTableTopSquares,
  };
};

export default useTableTop;
