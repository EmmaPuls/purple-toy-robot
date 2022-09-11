import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommandState {
  commandList: string[];
}

export const initialCommandState: CommandState = {
  commandList: [],
};

export const commandSlice = createSlice({
  name: "commands",
  initialState: initialCommandState,
  reducers: {
    addCommand: (state, action: PayloadAction<string>) => {
      state.commandList.push(action.payload);
    },
  },
});

export const { addCommand } = commandSlice.actions;

export default commandSlice.reducer;
