import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config";
import { GlobalTheme } from "theme";
import { TableCellColor } from "features/TableTop/types";

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
      bottom: "-0.4em",
      left: '-0.4em',
      margin: '0.4em',
      padding: '0.2em',
      textAlign: 'left',
      fontSize: '90%',
      whiteSpace: 'nowrap',
      lineHeight: '1em',
      fontWeight: 'bold',
      opacity: '0.7',
      backgroundColor: theme.colors.boardLight,
    }
  };
};

export default tableTopSquareStyles;
