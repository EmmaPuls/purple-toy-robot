import { CSSObject } from "@emotion/css";
import { TableCellColor } from "features/types";
import { GlobalTheme } from "theme";

type TableTopSquareStyle = {
  square: CSSObject;
  description: CSSObject;
  robot: CSSObject;
};

const tableTopSquareStyles = (
  theme: GlobalTheme,
  color: TableCellColor,
  squareDimension: number
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
      fontSize: "1.5em",
      lineHeight: "2em",
      fontWeight: "bold",
      overflow: "visible",
      pointerEvents: "none",
    },
    robot: {
      fontSize: `${squareDimension}%`,
    },
  };
};

export default tableTopSquareStyles;
