import { render, screen } from "@testing-library/react";
import { store } from "store";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import { EntryType, HistoryEntry, updateHistory } from "../commandSlice";
import CommandOutput from "./CommandOutput";

describe("CommandOutput", () => {
  it("should render event history", () => {
    // Setup
    const commandMsg = "test command";
    const errorMsg = "test error";

    const historyEntries: HistoryEntry[] = [
      { type: EntryType.COMMAND, value: commandMsg },
      { type: EntryType.ERROR, value: errorMsg },
    ];
    store.dispatch(updateHistory(historyEntries));

    // Render
    render(
      <MockedProviderContainer>
        <CommandOutput />
      </MockedProviderContainer>
    );

    // Assert
    screen.getByText(commandMsg);
    screen.getByText(errorMsg);
  });
});
