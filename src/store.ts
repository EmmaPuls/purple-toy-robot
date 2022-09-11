import { configureStore } from "@reduxjs/toolkit";
import commandReducer, {
  initialCommandState,
} from "./features/CommandCenter/commandSlice";

export const DEFAULT_STATE = {
  commands: initialCommandState,
};

export const store = configureStore({
  reducer: {
    commands: commandReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
