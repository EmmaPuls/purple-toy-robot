/**
 * Creates a square matrix out of an array of generics
 * @param state the array to be transformed into a matrix
 * @returns a multidimensional array of representation of the matrix
 */
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

/**
 * Specific function for rotating a matrix 90 degrees clockwise
 * This was created to make sure that 0,0 being SOUTH WEST and 5,5 being NORTH EAST 
 * was more intuitive for the user
 * @param matrix a multidimensional array of representation of the matrix
 * @returns a matrix rotated 90 degrees clockwise
 */
export function _rotateMatrixCounterClockwise90deg<T extends any>(
  matrix: Array<T>[]
): Array<T>[] {
  const newMatrix = matrix[0].map((_, i) =>
    matrix.map((row) => row[row.length - 1 - i])
  );
  return newMatrix;
}
