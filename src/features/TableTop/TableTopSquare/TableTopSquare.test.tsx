import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RobotDirection, TableCellColor } from "features/types";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import TableTopSquare from "./TableTopSquare";

describe("TableTopSquare", () => {
  it("should render without robot", () => {
    // Setup
    const state = {
      color: TableCellColor.color1,
      row: 0,
      column: 0,
    };

    // Render
    render(
      <MockedProviderContainer>
        <TableTopSquare state={state} number={1} hasRobot={false} />
      </MockedProviderContainer>
    );

    // Assert
    screen.getByTestId("Square-1");
  });

  it("should render with robot", () => {
    // Setup
    const state = {
      color: TableCellColor.color1,
      row: 0,
      column: 0,
    };

    // Render
    render(
      <MockedProviderContainer>
        <TableTopSquare
          state={state}
          number={1}
          hasRobot={true}
          robotDirection={RobotDirection.EAST}
        />
      </MockedProviderContainer>
    );

    // Assert
    screen.getByTestId("forward");
  });

  it("should show description when hovering over square", async () => {
    // Setup
    const state = {
      color: TableCellColor.color1,
      row: 0,
      column: 0,
    };

    // Render
    render(
      <MockedProviderContainer>
        <TableTopSquare state={state} number={1} hasRobot={false} />
      </MockedProviderContainer>
    );

    // Act
    userEvent.hover(screen.getByTestId("Square-1"));

    // Assert
    const popover = await screen.findByTestId("Popover-1");
    expect(popover).not.toBeNull();
  });
});
