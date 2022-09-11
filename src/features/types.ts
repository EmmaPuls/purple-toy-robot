export type TableTopSquareState = {
  color: TableCellColor;
  row: number;
  column: number;
};

export enum TableCellColor {
  color1 = 'color1',
  color2 = 'color2',
};


export enum RobotDirection {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}