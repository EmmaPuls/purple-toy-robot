import { GRID_SIZE } from "config";
import { _isEvenColumn, _isEvenRow } from "./useTableTop";

describe("useTableTop", () => {
  describe("_isEvenRow", () => {
    describe("given even row", () => {
      const itemsInEvenRow = [GRID_SIZE * 0, GRID_SIZE * 2];
      test.each(itemsInEvenRow)("returns true", (index) => {
        expect(_isEvenRow(index)).toBe(true);
      });
    });

    describe("given odd row", () => {
      const itemsInOddRow = [GRID_SIZE * 1, GRID_SIZE * 3];
      test.each(itemsInOddRow)("returns false", (index) => {
        expect(_isEvenRow(index)).toBe(false);
      });
    });
  });

  describe("_isEvenColumn", () => {
    describe("given even column", () => {
      const itemsInEvenColumn = [0, 2, 4];
      test.each(itemsInEvenColumn)("returns true", (index) => {
        expect(_isEvenColumn(index)).toBe(true);
      });
    });

    describe("given odd column", () => {
      const itemsInOddColumn = [1, 3, 5];
      test.each(itemsInOddColumn)("returns false", (index) => {
        expect(_isEvenColumn(index)).toBe(false);
      });
    });
  });
});
