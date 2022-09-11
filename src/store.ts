import { configureStore } from "@reduxjs/toolkit";
import robotReducer, { initialRobotState } from "features/Robot/robotSlice";
import commandReducer, {
  initialCommandState,
} from "features/CommandCenter/commandSlice";

export const DEFAULT_STATE = {
  commands: initialCommandState,
  robot: initialRobotState,
};

export const store = configureStore({
  reducer: {
    commands: commandReducer,
    robot: robotReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
