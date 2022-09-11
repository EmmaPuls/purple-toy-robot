import { RobotPosition } from "features/Robot/robotSlice";
import { RobotDirection } from "features/types";

/**
 * Only parse the PLACE command after we've confirmed it is valid
 * @param command a valid PLACE command
 * @returns new robot position
 */
export const parsePlace = (command: string): RobotPosition => {
    const [, row, col, direction] = command.split(",");
    // Using unknown here because we have validated the direction with regex
    return { row: Number(row), col: Number(col), direction: direction as unknown as RobotDirection };
};