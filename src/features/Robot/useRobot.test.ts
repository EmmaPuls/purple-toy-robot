import { renderHook } from "@testing-library/react-hooks";
import { RobotDirection } from "features/types";
import MockedProviderContainer from "testUtils/MockedProviderContainer";
import { directionMap, useRobot } from "./useRobot";

describe("useRobot", () => {
  describe("directionMap", () => {
    it("should map enums to correct values", () => {
      expect(directionMap[RobotDirection.NORTH]).toEqual("rotate(270deg)");
      expect(directionMap[RobotDirection.SOUTH]).toEqual("rotate(90deg)");
      expect(directionMap[RobotDirection.EAST]).toEqual("rotate(0deg)");
      expect(directionMap[RobotDirection.WEST]).toEqual("rotate(180deg)");
    });

    it("should map strings to correct values", () => {
      expect(directionMap["NORTH"]).toEqual("rotate(270deg)");
      expect(directionMap["SOUTH"]).toEqual("rotate(90deg)");
      expect(directionMap["EAST"]).toEqual("rotate(0deg)");
      expect(directionMap["WEST"]).toEqual("rotate(180deg)");
    });
  });

  describe("useRobot", () => {
    it("should set transform for a given direction", () => {
      // Setup
      const fakeDirection = RobotDirection.SOUTH;

      // Render
      const { result } = renderHook(() => useRobot(fakeDirection), {
        wrapper: MockedProviderContainer,
      });

      // Assert
      expect(result.current.transformRobot).toEqual("rotate(90deg)");
    });
  });
});
