import { GRID_SIZE } from "config";
import { GlobalTheme } from "../theme";

type TableTopSquare = {
    color: string;
}

type TableTopHookResult = {
    tableTopSquares: TableTopSquare[];
}

const initialTableTopSquares = (theme: GlobalTheme): TableTopSquare[] => {
    const tableTopSquares = [] as TableTopSquare[];
    for(let i = 0; i < GRID_SIZE*GRID_SIZE; i++) {
        const tableTopSquare: TableTopSquare = {
            color: i%2 === 0 ? theme.colors.teal: theme.colors.tealInactive,
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