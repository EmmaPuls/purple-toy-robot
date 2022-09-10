import { GRID_SIZE } from "config/config";
import { useState } from "react";
import { TableCellColor, TableTopSquareState } from "./types";

type TableTopHookResult = {
  tableTopSquares: TableTopSquareState[];
  setTableTopSquares: React.Dispatch<
    React.SetStateAction<TableTopSquareState[]>
  >;
};
const getRow = (i: number): number => i % GRID_SIZE;
const getColumn = (i: number): number => Math.floor(i / GRID_SIZE);
export const _isEvenRow = (i: number): boolean => getRow(i) % 2 === 0;
export const _isEvenColumn = (i: number): boolean => getColumn(i) % 2 === 0;
const alternateColors = (i: number): TableCellColor =>
  _isEvenColumn(i)
    ? _isEvenRow(i)
      ? TableCellColor.color1
      : TableCellColor.color2
    : !_isEvenRow(i)
    ? TableCellColor.color1
    : TableCellColor.color2;

export const _setTableTopSquareState = (): TableTopSquareState[] => {
  const tableTopSquares = [] as TableTopSquareState[];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const tableTopSquare: TableTopSquareState = {
      color: alternateColors(i),
      row: getRow(i),
      column: getColumn(i),
    };
    tableTopSquares.push(tableTopSquare);
  }
  return tableTopSquares;
};

export function _createSquareMatrixFromArray<T extends any>(
  state: Array<T>
): Array<T>[] {
  const root = Math.floor(Math.sqrt(state.length));
  const isSquare = root * root === state.length;
  if (!isSquare) {
    throw new Error("Array is not square");
  }
  const matrix: Array<T>[] = [],
    n = root;
  for (let i = 0, k = -1; i < state.length; i++) {
    if (i % n === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(state[i]);
  }
  return matrix;
}

export function _rotateMatrixCounterClockwise90deg<T extends any>(
  matrix: Array<T>[]
): Array<T>[] {
  const newMatrix = matrix[0].map((_, i) =>
    matrix.map((row) => row[row.length - 1 - i])
  );
  return newMatrix;
}

const initTableTopSquares = (): TableTopSquareState[] => {
  const stateWithColourAndRow = _setTableTopSquareState();
  const stateAsMatrix = _createSquareMatrixFromArray(stateWithColourAndRow);
  const rotatedMatrix = _rotateMatrixCounterClockwise90deg(stateAsMatrix);
  const initalState = rotatedMatrix.flat();
  return initalState;
};

const useTableTop = (): TableTopHookResult => {
  const [tableTopSquares, setTableTopSquares] = useState<TableTopSquareState[]>(
    () => initTableTopSquares()
  );

  return {
    tableTopSquares,
    setTableTopSquares,
  };
};

export default useTableTop;
