import { CSSObject } from "@emotion/css";
import { GRID_SIZE } from "config";
import { GlobalTheme } from "theme";

type TableTopSquareStyle = {
  square: CSSObject;
};

const squareDimension = Math.floor(100 / GRID_SIZE);

const tableTopSquareStyles = (
  theme: GlobalTheme,
  color: string
): TableTopSquareStyle => ({
  square: {
    backgroundColor: color,
    minHeight: `${squareDimension}%`,
    minWidth: `${squareDimension}%`,
  },
});

export default tableTopSquareStyles;
