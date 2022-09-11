import { createAsyncThunk } from "@reduxjs/toolkit";
import { GRID_SIZE } from "config/config";
import {
  moveRobotForward,
  moveRobotLeft,
  moveRobotRight,
  placeRobot,
  placeRobotWithoutDirection,
  RobotPosition,
} from "features/Robot/robotSlice";
import { RobotDirection } from "features/types";
import isNil from "lodash/isNil";
import { AppDispatch, AppState } from "store";
import { CommandType } from "./commands";
import { addCommand, EntryType, updateHistory } from "./commandSlice";
import { parsePlace } from "./helpers";

interface HandleCommandInput {
  command: string;
  matchingPattern: CommandType;
}

/**
 * Checks if the robot is currently placed and if it can move forward
 * @param position current position of the robot
 * @returns true if the robot can move forward
 */
export const canRobotMoveForward = (position?: RobotPosition) => {
  if (!position) {
    return false;
  }
  switch (position.direction) {
    case RobotDirection.NORTH:
      return position.row < GRID_SIZE - 1;
    case RobotDirection.EAST:
      return position.col < GRID_SIZE - 1;
    case RobotDirection.SOUTH:
      return position.row > 0;
    case RobotDirection.WEST:
      return position.col > 0;
  }
};

/**
 * Thunk for handling all the different types of commands
 * and updating the state accordingly
 */
export const handleCommand = createAsyncThunk<
  any,
  HandleCommandInput,
  { dispatch: AppDispatch; state: AppState }
>(
  "robot/handleCommand",
  async ({ command, matchingPattern }: HandleCommandInput, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const state = getState();

    const handleExecutedCommands = (command: string) => {
      dispatch(addCommand(command));
      dispatch(updateHistory({ type: EntryType.COMMAND, value: command }));
    };

    switch (matchingPattern as CommandType) {
      case CommandType.place: {
        const parsedCommand = parsePlace(command);
        if (!parsedCommand.direction && !state.robot.position) {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot must be placed on the board with a direction.`,
            })
          );
          return;
        } else if (!parsedCommand.direction) {
          console.log("place without direction");
          dispatch(placeRobotWithoutDirection(parsedCommand));
          handleExecutedCommands(command);
        } else {
          dispatch(placeRobot(parsedCommand));
          handleExecutedCommands(command);
        }
        break;
      }
      case CommandType.move: {
        if (isNil(state.robot.position)) {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot must be placed on the table before moving.`,
            })
          );
        } else if (canRobotMoveForward(state.robot.position)) {
          dispatch(moveRobotForward());
          handleExecutedCommands(command);
        } else {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot cannot move forward, it is at the edge of the table.`,
            })
          );
        }
        break;
      }
      case CommandType.left: {
        if (isNil(state.robot.position)) {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot must be placed on the table before turning left.`,
            })
          );
        } else {
          dispatch(moveRobotLeft());
          handleExecutedCommands(command);
        }
        break;
      }
      case CommandType.right: {
        if (isNil(state.robot.position)) {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot must be placed on the table before turning right.`,
            })
          );
        } else {
          dispatch(moveRobotRight());
          handleExecutedCommands(command);
        }
        break;
      }
      case CommandType.report: {
        if (isNil(state.robot.position)) {
          dispatch(
            updateHistory({
              type: EntryType.RESULT,
              value: `Robot is not yet placed on the table`,
            })
          );
        } else {
          dispatch(
            updateHistory({
              type: EntryType.RESULT,
              value: `Report Robot Position: ${state.robot.position.row}, ${state.robot.position.col}, ${state.robot.position.direction}`,
            })
          );
        }
        break;
      }
    }
  }
);
