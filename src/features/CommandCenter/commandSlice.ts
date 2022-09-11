import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum EntryType {
  ERROR,
  COMMAND,
  RESULT,
}

export type HistoryEntry = {
  type: EntryType;
  value: string;
}

interface CommandState {
  commandList: string[];
  history: HistoryEntry[];
}

export const initialCommandState: CommandState = {
  commandList: [],
  history: [],
};

export const commandSlice = createSlice({
  name: "commands",
  initialState: initialCommandState,
  reducers: {
    addCommand: (state, action: PayloadAction<string>) => {
      state.commandList.unshift(action.payload);
    },
    updateHistory: (state, action: PayloadAction<HistoryEntry | HistoryEntry[]>) => {
      if (Array.isArray(action.payload)) {
        state.history.unshift(...action.payload);
      } else {
        state.history.unshift(action.payload);
      }
    },
  },
});

export const { addCommand, updateHistory } = commandSlice.actions;

export default commandSlice.reducer;
