import { fireEvent, render, screen } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import CommandInput from "./CommandInput";

const mockHandleSubmit = jest.fn();
const mockOnChange = jest.fn();
jest.mock("./useCommandInput", () => {
  return {
    __esModule: true,
    default: () => ({
      handleSubmit: mockHandleSubmit,
      onChange: mockOnChange,
      value: "",
      error: false,
    }),
  };
});

describe("CommandInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handle keyPresses", () => {
    render(
      <MockedProviderContainer>
        <CommandInput />
      </MockedProviderContainer>
    );
    const input = screen.getByTestId("command-input");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(mockHandleSubmit).toHaveBeenCalledWith("Enter");
  });

  it("should handle onChange", () => {
    render(
      <MockedProviderContainer>
        <CommandInput />
      </MockedProviderContainer>
    );
    const input = screen.getByTestId("command-input");
    userEvent.type(input, "this");

    expect(mockOnChange).toHaveBeenCalledWith("t");
    expect(mockOnChange).toHaveBeenCalledWith("h");
    expect(mockOnChange).toHaveBeenCalledWith("i");
    expect(mockOnChange).toHaveBeenCalledWith("s");
  });
});
