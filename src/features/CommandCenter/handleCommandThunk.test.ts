import {
  moveRobotForward,
  moveRobotLeft,
  moveRobotRight,
  placeRobot,
  placeRobotWithoutDirection,
} from "features/Robot/robotSlice";
import { RobotDirection } from "features/types";
import { AppState } from "store";
import { CommandType } from "./commands";
import { addCommand, EntryType, updateHistory } from "./commandSlice";
import { canRobotMoveForward, handleCommand } from "./handleCommandThunk";
import { parsePlace } from "./helpers";

describe("handleCommandThunk", () => {
  describe("place", () => {
    it("should dispatch placeRobot, addCommand & updateHistory", async () => {
      // Setup
      const command = "PLACE,0,0,NORTH";
      const parsedCommand = parsePlace(command);
      const matchingPattern = CommandType.place;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(placeRobot(parsedCommand));
      expect(dispatch).toHaveBeenCalledWith(addCommand(command));
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({ type: EntryType.COMMAND, value: command })
      );
    });

    it("should dispatch placeRobotWithoutDirection, addCommand & updateHistory when possible", async () => {
      // Setup
      const command = "PLACE,0,0";
      const parsedCommand = parsePlace(command);
      const matchingPattern = CommandType.place;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 0,
            col: 0,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        placeRobotWithoutDirection(parsedCommand)
      );
      expect(dispatch).toHaveBeenCalledWith(addCommand(command));
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({ type: EntryType.COMMAND, value: command })
      );
    });

    it("should dispatch updateHistory with error when not initially placed with a direction", async () => {
      // Setup
      const command = "PLACE,0,0";
      const matchingPattern = CommandType.place;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.ERROR,
          value: expect.stringContaining(
            "Robot must be placed on the board with a direction."
          ),
        })
      );
    });
  });

  describe("move forward", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should dispatch moveRobot, addCommand & updateHistory when possible", async () => {
      // Setup
      const command = "MOVE";
      const matchingPattern = CommandType.move;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 0,
            col: 0,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(moveRobotForward());
      expect(dispatch).toHaveBeenCalledWith(addCommand(command));
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({ type: EntryType.COMMAND, value: command })
      );
    });

    it("should dispatch updateHistory with error when robot at edge", async () => {
      // Setup
      const command = "MOVE";
      const matchingPattern = CommandType.move;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 5,
            col: 5,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.ERROR,
          value: expect.stringContaining(
            "Robot cannot move forward, it is at the edge of the table."
          ),
        })
      );
    });

    it("should dispatch updateHistory with error when robot not placed", async () => {
      // Setup
      const command = "MOVE";
      const matchingPattern = CommandType.move;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.ERROR,
          value: expect.stringContaining(
            "Robot must be placed on the table before moving."
          ),
        })
      );
    });
  });

  describe("move left", () => {
    it("should dispatch moveRobotLeft, addCommand & updateHistory if robot is placed", async () => {
      // Setup
      const command = "LEFT";
      const matchingPattern = CommandType.left;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 0,
            col: 0,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(moveRobotLeft());
      expect(dispatch).toHaveBeenCalledWith(addCommand(command));
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({ type: EntryType.COMMAND, value: command })
      );
    });

    it("should dispatch updateHistory with error when robot not placed", async () => {
      // Setup
      const command = "LEFT";
      const matchingPattern = CommandType.left;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.ERROR,
          value: expect.stringContaining(
            "Robot must be placed on the table before turning left."
          ),
        })
      );
    });
  });

  describe("move right", () => {
    it("should dispatch moveRobotRight, addCommand & updateHistory if robot is placed", async () => {
      // Setup
      const command = "RIGHT";
      const matchingPattern = CommandType.right;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 0,
            col: 0,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(moveRobotRight());
      expect(dispatch).toHaveBeenCalledWith(addCommand(command));
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({ type: EntryType.COMMAND, value: command })
      );
    });

    it("should dispatch updateHistory with error when robot not placed", async () => {
      // Setup
      const command = "RIGHT";
      const matchingPattern = CommandType.right;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.ERROR,
          value: expect.stringContaining(
            "Robot must be placed on the table before turning right."
          ),
        })
      );
    });
  });

  describe("report", () => {
    it("should dispatch updateHistory with robot position if robot is placed", async () => {
      // Setup
      const command = "REPORT";
      const matchingPattern = CommandType.report;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: {
            row: 0,
            col: 0,
            direction: RobotDirection.NORTH,
          },
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.RESULT,
          value: expect.stringContaining(`Report Robot Position: 0, 0, NORTH`),
        })
      );
    });

    it("should dispatch updateHistory with error when robot not placed", async () => {
      // Setup
      const command = "REPORT";
      const matchingPattern = CommandType.report;
      const dispatch = jest.fn();
      const state: AppState = {
        robot: {
          position: undefined,
        },
        commands: {
          history: [],
          commandList: [],
        },
      };
      const thunk = handleCommand({ command, matchingPattern });

      // Act
      await thunk(dispatch, () => state, undefined);

      // Assert
      expect(dispatch).toHaveBeenCalledWith(
        updateHistory({
          type: EntryType.RESULT,
          value: expect.stringContaining(
            `Robot is not yet placed on the table`
          ),
        })
      );
    });
  });
});

describe("canRobotMoveForward", () => {
  test.each([
    [{ row: 0, col: 0, direction: RobotDirection.NORTH }, true],
    [{ row: 5, col: 5, direction: RobotDirection.NORTH }, false],
    [{ row: 0, col: 0, direction: RobotDirection.SOUTH }, false],
    [{ row: 5, col: 5, direction: RobotDirection.SOUTH }, true],
    [{ row: 0, col: 0, direction: RobotDirection.EAST }, true],
    [{ row: 5, col: 5, direction: RobotDirection.EAST }, false],
    [{ row: 0, col: 0, direction: RobotDirection.WEST }, false],
    [{ row: 5, col: 5, direction: RobotDirection.WEST }, true],
    [undefined, false],
  ])("should return true when robot can move forward", (position, expected) => {
    // Act
    const result = canRobotMoveForward(position);

    // Assert
    expect(result).toBe(expected);
  });
});
