import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { GlobalTheme } from "theme";
import tableTopStyles from "./TableTop.style";
import TableTopSquare from "./TableTopSquare";
import useTableTop from "./useTableTop";

const TableTop: FC = () => {
  const theme = useTheme() as GlobalTheme;
  const styles = tableTopStyles(theme);
  const { tableTopSquares, robotPosition } = useTableTop();

  return (
    <div className={css(styles.tableTop)} data-testid={"TableTop"}>
      {tableTopSquares.map((tableTopSquare, index) => {
        return (
          <TableTopSquare
            state={tableTopSquare}
            key={`Square-${index}`}
            number={index}
            hasRobot={robotPosition?.row === tableTopSquare.row && robotPosition?.col === tableTopSquare.column}
            robotDirection={robotPosition?.direction}
          />
        );
      })}
    </div>
  );
};

export default TableTop;
