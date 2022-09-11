import { GRID_SIZE } from "config/config";
import { _isEvenColumn, _isEvenRow } from "./squareCalcs";

describe("squareCalcs", () => {
  describe("_isEvenRow", () => {
    describe("given even row", () => {
      const indicesOfEvenRows = [0, 2, 4];
      test.each(indicesOfEvenRows)("returns true", (index) => {
        expect(_isEvenRow(index)).toBe(true);
      });
    });

    describe("given odd row", () => {
      const indicesOfOddRows = [1, 3, 5];
      test.each(indicesOfOddRows)("returns false", (index) => {
        expect(_isEvenRow(index)).toBe(false);
      });
    });
  });

  describe("_isEvenColumn", () => {
    describe("given even column", () => {
      const indicesOfEvenCols = [GRID_SIZE * 0, GRID_SIZE * 2];
      test.each(indicesOfEvenCols)("returns true", (index) => {
        expect(_isEvenColumn(index)).toBe(true);
      });
    });

    describe("given odd column", () => {
      const indicesOfOddCols = [GRID_SIZE * 1, GRID_SIZE * 3];
      test.each(indicesOfOddCols)("returns false", (index) => {
        expect(_isEvenColumn(index)).toBe(false);
      });
    });
  });
});
