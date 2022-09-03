import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config";
import { TableCellColor } from "TableTop/types";
import { GlobalTheme } from "theme";

type TableTopSquareStyle = {
  square: CSSObject;
  overlayContainer: CSSObject;
  overlayText: CSSObject;
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
    overlayContainer: {
      minHeight: '100%',
      minWidth: '100%',
      position: 'relative',
    },
    overlayText: {
      position: "absolute",
      bottom: "0px",
      margin: '0.4em',
      textAlign: 'left',
      fontSize: '1.5em',
      lineHeight: '1em',
      fontWeight: 'bold',
      opacity: '0.5',
    }
  };
};

export default tableTopSquareStyles;
