import { GRID_SIZE } from "config/config";

export enum Command {
  place = "place",
}

export type CommandPatterns = {
  [key in Command]: RegExp;
};

/**
 * Gets the range of numbers that are valid for the grid
 * @param gridSize the size of the grid
 * @returns string of regex that matches the range of numbers for the grid
 */
const gridRange = (gridSize: number) => {
  const length = gridSize.toString().length;
  if (length === 1) {
    return `[0-${gridSize}]`;
  } else {
    return `(0|[1-9]${"[0-9]".repeat(length - 1)}|${gridSize})`;
  }
};

const getPlaceRegex = (gridSize: number): RegExp =>
  new RegExp(
    `^PLACE,${gridRange(gridSize)},${gridRange(
      gridSize
    )},(NORTH|EAST|SOUTH|WEST)$`
  );

const commands = (gridSize: number): CommandPatterns => ({
  "place": getPlaceRegex(gridSize),
});

const buildPattern = (gridSize: number) => {
  return commands(gridSize);
};

export const getPatternsAsRegex = (gridSize: number = GRID_SIZE) => {
  return buildPattern(gridSize);
};

export const findMatchingPattern = (command: string, patterns: CommandPatterns) =>
  Object.values(patterns).find((pattern) => pattern.test(command));
