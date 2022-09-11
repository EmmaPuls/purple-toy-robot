import { render, screen } from "@testing-library/react";
import { RobotDirection } from "features/types";
import Robot from "./Robot";

describe("Robot", () => {
  it("should render successfully", () => {
    render(<Robot robotDirection={RobotDirection.NORTH} />);
    screen.getByTestId("forward");
  });
});
