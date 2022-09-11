import { GRID_SIZE } from "config/config";
import { RobotDirection } from "features/types";
import { store } from "store";
import {
  clearRobot,
  moveRobotForward,
  moveRobotLeft,
  moveRobotRight,
  placeRobot,
} from "./robotSlice";

describe("robotSlice", () => {
  describe("moveRobotForward", () => {
    it("should not move if robot is not placed", () => {
      // Setup
      store.dispatch(clearRobot());

      // Act
      store.dispatch(moveRobotForward());

      // Assert
      expect(store.getState().robot.position).toBeNull();
    });

    describe("given there is space to move forward", () => {
      it("should move north when facing north", () => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.NORTH })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row: row + 1,
          col: col,
          direction: RobotDirection.NORTH,
        });
      });

      it("should move south when facing south", () => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.SOUTH })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row: row - 1,
          col: col,
          direction: RobotDirection.SOUTH,
        });
      });

      it("should move east when facing east", () => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.EAST })
        );

        // Act
        store.dispatch(moveRobotForward());

        expect(store.getState().robot.position).toEqual({
          row: row,
          col: col + 1,
          direction: RobotDirection.EAST,
        });
      });

      it("should move west when facing west", () => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.WEST })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row: row,
          col: col - 1,
          direction: RobotDirection.WEST,
        });
      });
    });

    describe("given there is no space to move forward", () => {
      it("should not move north when facing north", () => {
        // Setup
        const row = GRID_SIZE - 1;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.NORTH })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: RobotDirection.NORTH,
        });
      });

      it("should not move south when facing south", () => {
        // Setup
        const row = 0;
        const col = 3;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.SOUTH })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: RobotDirection.SOUTH,
        });
      });

      it("should not move east when facing east", () => {
        // Setup
        const row = 3;
        const col = GRID_SIZE - 1;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.EAST })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: RobotDirection.EAST,
        });
      });

      it("should not move west when facing west", () => {
        // Setup
        const row = 3;
        const col = 0;
        store.dispatch(
          placeRobot({ row, col, direction: RobotDirection.WEST })
        );

        // Act
        store.dispatch(moveRobotForward());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: RobotDirection.WEST,
        });
      });
    });
  });

  describe("moveRobotLeft", () => {
    it("should not move if robot is not placed", () => {
      // Setup
      store.dispatch(clearRobot());

      // Act
      store.dispatch(moveRobotLeft());

      // Assert
      expect(store.getState().robot.position).toBeNull();
    });

    test.each([
      [RobotDirection.NORTH, RobotDirection.WEST],
      [RobotDirection.SOUTH, RobotDirection.EAST],
      [RobotDirection.EAST, RobotDirection.NORTH],
      [RobotDirection.WEST, RobotDirection.SOUTH],
    ])(
      "should rotate counter clockwise from current direction",
      (currentDirection: RobotDirection, expectedDirection: RobotDirection) => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(placeRobot({ row, col, direction: currentDirection }));

        // Act
        store.dispatch(moveRobotLeft());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: expectedDirection,
        });
      }
    );
  });

  describe("moveRobotRight", () => {
    it("should not move if robot is not placed", () => {
      // Setup
      store.dispatch(clearRobot());

      // Act
      store.dispatch(moveRobotLeft());

      // Assert
      expect(store.getState().robot.position).toBeNull();
    });

    test.each([
      [RobotDirection.NORTH, RobotDirection.EAST],
      [RobotDirection.SOUTH, RobotDirection.WEST],
      [RobotDirection.EAST, RobotDirection.SOUTH],
      [RobotDirection.WEST, RobotDirection.NORTH],
    ])(
      "should rotate clockwise from current direction",
      (currentDirection: RobotDirection, expectedDirection: RobotDirection) => {
        // Setup
        const row = 3;
        const col = 3;
        store.dispatch(placeRobot({ row, col, direction: currentDirection }));

        // Act
        store.dispatch(moveRobotRight());

        // Assert
        expect(store.getState().robot.position).toEqual({
          row,
          col,
          direction: expectedDirection,
        });
      }
    );
  });
});
