import { createAsyncThunk } from "@reduxjs/toolkit";
import { GRID_SIZE } from "config/config";
import {
  moveRobotForward,
  placeRobot,
  RobotPosition,
} from "features/Robot/robotSlice";
import { RobotDirection } from "features/types";
import { isNil } from "lodash";
import { AppDispatch, AppState } from "store";
import { CommandType } from "./commands";
import { addCommand, EntryType, updateHistory } from "./commandSlice";
import { parsePlace } from "./helpers";

interface HandleCommandInput {
  command: string;
  matchingPattern: CommandType;
}

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

    console.log("Can log out in thunks");
    switch (matchingPattern as CommandType) {
      case CommandType.place: {
        const parsedCommand = parsePlace(command);
        dispatch(placeRobot(parsedCommand));
        handleExecutedCommands(command);
        break;
      }
      case CommandType.move: {
        console.log("move");
        if (isNil(state.robot.position)) {
          dispatch(
            updateHistory({
              type: EntryType.ERROR,
              value: `Invalid command: "${command}"
              Robot must be placed on the grid before moving.`,
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
    }
  }
);
