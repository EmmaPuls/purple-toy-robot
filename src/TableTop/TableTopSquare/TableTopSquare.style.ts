import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config";
import { TableCellColor } from "TableTop/types";
import { GlobalTheme } from "theme";

type TableTopSquareStyle = {
  square: CSSObject;
};

const squareDimension = Math.floor(100 / GRID_SIZE);

const tableTopSquareStyles = (
  theme: GlobalTheme,
  color: TableCellColor
): TableTopSquareStyle => {
  // Map each TableCellColor to a color from the theme
  const colorMap = {
    [TableCellColor.color1]: theme.colors.boardDark,
    [TableCellColor.color2]: theme.colors.boardLight,
  };
  return {
    square: {
      backgroundColor: colorMap[color],
      minHeight: `${squareDimension}%`,
      minWidth: `${squareDimension}%`,
    },
  };
};

export default tableTopSquareStyles;
