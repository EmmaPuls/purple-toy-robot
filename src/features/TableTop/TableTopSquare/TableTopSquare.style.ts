import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config/config";
import { GlobalTheme } from "theme";
import { TableCellColor } from "features/TableTop/types";

type TableTopSquareStyle = {
  square: CSSObject;
  description: CSSObject;
};

const squareDimension = Math.floor(100 / GRID_SIZE);

const tableTopSquareStyles = (
  theme: GlobalTheme,
  color: TableCellColor,
): TableTopSquareStyle => {
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
    description: {
      fontSize: '1.5em',
      lineHeight: '2em',
      fontWeight: 'bold',
      overflow: 'visible',
      pointerEvents: 'none',
    }
  };
};

export default tableTopSquareStyles;
