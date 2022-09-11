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
