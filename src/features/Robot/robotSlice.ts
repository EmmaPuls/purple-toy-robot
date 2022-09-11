import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GRID_SIZE } from "config/config";
import { RobotDirection } from "features/types";

export type RobotLocation = {
  row: number;
  col: number;
};

export type RobotPosition = {
  row: number;
  col: number;
  direction: RobotDirection;
};

export type RobotState = {
  position: RobotPosition | undefined;
};

export const initialRobotState: RobotState = {
  position: undefined,
};

export const robotSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    placeRobot: (state, action: PayloadAction<RobotPosition>) => {
      state.position = action.payload;
    },
    placeRobotWithoutDirection: (
      state,
      action: PayloadAction<RobotLocation>
    ) => {
      if (state.position) {
        state.position.row = action.payload.row;
        state.position.col = action.payload.col;
      }
    },
    clearRobot: (state) => {
      state.position = undefined;
    },
    moveRobotForward: (state) => {
      if (state.position) {
        switch (state.position.direction) {
          case RobotDirection.NORTH:
            if (state.position.row < GRID_SIZE - 1) {
              state.position.row++;
            }
            break;
          case RobotDirection.SOUTH:
            if (state.position.row > 0) {
              state.position.row--;
            }
            break;
          case RobotDirection.EAST:
            if (state.position.col < GRID_SIZE - 1) {
              state.position.col++;
            }
            break;
          case RobotDirection.WEST:
            if (state.position.col > 0) {
              state.position.col--;
            }
            break;
        }
      }
    },
    moveRobotLeft: (state) => {
      if (state.position) {
        switch (state.position.direction) {
          case RobotDirection.NORTH:
            state.position.direction = RobotDirection.WEST;
            break;
          case RobotDirection.SOUTH:
            state.position.direction = RobotDirection.EAST;
            break;
          case RobotDirection.EAST:
            state.position.direction = RobotDirection.NORTH;
            break;
          case RobotDirection.WEST:
            state.position.direction = RobotDirection.SOUTH;
            break;
        }
      }
    },
    moveRobotRight: (state) => {
      if (state.position) {
        switch (state.position.direction) {
          case RobotDirection.NORTH:
            state.position.direction = RobotDirection.EAST;
            break;
          case RobotDirection.SOUTH:
            state.position.direction = RobotDirection.WEST;
            break;
          case RobotDirection.EAST:
            state.position.direction = RobotDirection.SOUTH;
            break;
          case RobotDirection.WEST:
            state.position.direction = RobotDirection.NORTH;
            break;
        }
      }
    },
  },
});

export const {
  placeRobot,
  placeRobotWithoutDirection,
  moveRobotForward,
  moveRobotLeft,
  moveRobotRight,
  clearRobot,
} = robotSlice.actions;

export default robotSlice.reducer;
