import { GRID_SIZE } from "config";
import { GlobalTheme } from "../theme";
import { TableTopSquareState } from "./types";

type TableTopHookResult = {
    tableTopSquares: TableTopSquareState[];
}

export const _isEvenRow = (index: number): boolean => Math.floor(index/6)%2 === 0;
export const _isEvenColumn = (index: number): boolean => index%2 === 0;
const _alternateColors = (index: number, tableCellColors: string[]): string => _isEvenColumn(index) ? _isEvenRow(index) ? tableCellColors[0] : tableCellColors[1] : !_isEvenRow(index) ? tableCellColors[0] : tableCellColors[1]

const initialTableTopSquares = (theme: GlobalTheme): TableTopSquareState[] => {
    const tableCellColors = [theme.colors.boardDark, theme.colors.boardLight];
    const tableTopSquares = [] as TableTopSquareState[];
    for(let i = 0; i < GRID_SIZE*GRID_SIZE; i++) {
        const tableTopSquare: TableTopSquareState = {
            color: _alternateColors(i, tableCellColors),
            row: Math.floor(i/GRID_SIZE),
            column: i%GRID_SIZE,
        };
        tableTopSquares.push(tableTopSquare);
    }
    return tableTopSquares;
};

const useTableTop = (theme: GlobalTheme): TableTopHookResult => {
    const tableTopSquares = initialTableTopSquares(theme);
    
    return {
        tableTopSquares,
    };
}

export default useTableTop;