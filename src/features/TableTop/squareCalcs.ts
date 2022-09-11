import { GRID_SIZE } from "config/config";
import { TableCellColor, TableTopSquareState } from "features/types";
import {
  _createSquareMatrixFromArray,
  _rotateMatrixCounterClockwise90deg,
} from "./matrixCalcs";

const getRow = (i: number): number => i % GRID_SIZE;
const getColumn = (i: number): number => Math.floor(i / GRID_SIZE);
export const _isEvenRow = (i: number): boolean => getRow(i) % 2 === 0;
export const _isEvenColumn = (i: number): boolean => getColumn(i) % 2 === 0;

/**
 * Returns a color for each square based on its position.
 * Enables the checkerboard pattern.
 * @param i index of the square
 * @returns color of the square
 */
const alternateColors = (i: number): TableCellColor =>
  _isEvenColumn(i)
    ? _isEvenRow(i)
      ? TableCellColor.color1
      : TableCellColor.color2
    : !_isEvenRow(i)
    ? TableCellColor.color1
    : TableCellColor.color2;

/**
 * Sets the color, row and column for each square
 * @returns an array of squares based on the grid size
 */
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

/**
 * Initializes the squares for the table top
 */
export const initTableTopSquares = (): TableTopSquareState[] => {
  const stateWithColourAndRow = _setTableTopSquareState();
  const stateAsMatrix = _createSquareMatrixFromArray(stateWithColourAndRow);
  const rotatedMatrix = _rotateMatrixCounterClockwise90deg(stateAsMatrix);
  const initalState = rotatedMatrix.flat();
  return initalState;
};
