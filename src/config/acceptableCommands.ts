import { GRID_SIZE } from "./config";

const gridRange = (gridSize: number) => {
  //regex for numbers between 0 and GRID_SIZE including if grid size if > 9
  const length = gridSize.toString().length;
  if (length === 1) {
    return `[0-${gridSize}]`;
  } else {
    return `(0|[1-9]${"[0-9]".repeat(length - 1)}|${gridSize})`;
  }
};

const getPlaceRegex = (gridSize: number) =>
  `^PLACE,${gridRange(gridSize)},${gridRange(
    gridSize
  )},(NORTH|EAST|SOUTH|WEST)$`;

const commands = (gridSize: number) => [getPlaceRegex(gridSize)];

const buildPattern = (gridSize: number): RegExp => {
  return new RegExp(commands(gridSize).join("|"));
};

export const getPatternsAsRegex = (gridSize: number = GRID_SIZE) => {
  return buildPattern(gridSize);
};
