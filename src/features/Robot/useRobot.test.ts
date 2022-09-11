import { RobotDirection } from "features/types";
import { directionMap } from "./useRobot";

describe('useRobot', () => {
    describe('directionMap', () => {
        it('should have the correct values', () => {
            expect(directionMap[RobotDirection.NORTH]).toEqual('rotate(0deg)');
            expect(directionMap[RobotDirection.SOUTH]).toEqual('rotate(180deg)');
            expect(directionMap[RobotDirection.EAST]).toEqual('rotate(90deg)');
            expect(directionMap[RobotDirection.WEST]).toEqual('rotate(270deg)');
        });
    });
});