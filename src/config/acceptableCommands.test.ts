import { getPatternsAsRegex } from "./acceptableCommands";
import { GRID_SIZE } from "./config";

const MOCK_GRID_SIZE = 201;

const cardinalDirections = ["NORTH", "SOUTH", "EAST", "WEST"];
describe("acceptableCommands", () => {
  describe("getPatternsAsRegex", () => {
    describe("PLACE commands", () => {
      const regex = getPatternsAsRegex();

      it("should correctly match valid commands", () => {
        cardinalDirections.forEach((direction) => {
          const command = `PLACE,0,${GRID_SIZE},${direction}`;
          const isValid = regex.test(command);
          expect(isValid).toBeTruthy();
        });
      });

      it("should correctly fail invalid commands", () => {
        const command = `PLACE 0 0 NORTH`;
        const isValid = regex.test(command);
        expect(isValid).toBeFalsy();
      });

      describe("GRID_SIZE is greater than 9", () => {
        const regex = getPatternsAsRegex(MOCK_GRID_SIZE);

        it("should correctly match valid commands", () => {
          const command = `PLACE,${
            MOCK_GRID_SIZE - 30
          },${MOCK_GRID_SIZE},NORTH`;
          console.log("command - ", command);
          const isValid = regex.test(command);
          expect(isValid).toBeTruthy();
        });
      });
    });
  });
});
