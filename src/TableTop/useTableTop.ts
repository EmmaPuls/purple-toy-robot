import { GRID_SIZE } from "config";
import { useState } from "react";
import { TableCellColor, TableTopSquareState } from "./types";

type TableTopHookResult = {
  tableTopSquares: TableTopSquareState[];
};
const getRow = (i: number): number => Math.floor(i / GRID_SIZE);
const getColumn = (i: number): number => i % GRID_SIZE;
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

const initTableTopSquares = (): TableTopSquareState[] => {
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

const useTableTop = (): TableTopHookResult => {
  const [tableTopSquares, setTableTopSquares] = useState<TableTopSquareState[]>(
    initTableTopSquares()
  );

  return {
    tableTopSquares,
  };
};

export default useTableTop;
