import { GRID_SIZE } from "config/config";
import {
  _createSquareMatrixFromArray,
  _isEvenColumn,
  _isEvenRow,
  _rotateMatrixCounterClockwise90deg,
} from "./useTableTop";

describe("useTableTop", () => {
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

  describe("_createSquareMatrixFromArray", () => {
    it("should throw an error if the array is not square", () => {
      const array = [1, 2, 3, 4, 5, 6];
      expect(() => _createSquareMatrixFromArray(array)).toThrowError(
        "Array is not square"
      );
    });

    it("should return a square matrix if possible", () => {
      const array = [1, 2, 3, 4];
      const expected = [
        [1, 2],
        [3, 4],
      ];
      const actual = _createSquareMatrixFromArray(array);
      console.log(actual);
      expect(actual).toEqual(expected);
    });
  });

  describe("_rotateMatrixCounterClockwise90deg", () => {
    it("should rotate a square matrix 90 degrees counter clockwise", () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];
      const expected = [
        [2, 4],
        [1, 3],
      ];
      const actual = _rotateMatrixCounterClockwise90deg(matrix);
      expect(actual).toEqual(expected);
    });

    it("should rotate a rectangular matrix 90 degrees counter clockwise", () => {
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const expected = [
        [2, 4, 6],
        [1, 3, 5],
      ];
      const actual = _rotateMatrixCounterClockwise90deg(matrix);
      expect(actual).toEqual(expected);
    });
  });
});
