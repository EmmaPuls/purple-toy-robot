import {
  _createSquareMatrixFromArray,
  _rotateMatrixCounterClockwise90deg,
} from "./matrixCalcs";

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
