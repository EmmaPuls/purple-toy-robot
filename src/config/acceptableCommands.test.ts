import { getPatternsAsRegex } from "./acceptableCommands";

const cardinalDirections = ["NORTH", "SOUTH", "EAST", "WEST"];
const regex = getPatternsAsRegex();

describe("acceptableCommands", () => {
  describe("getPatternsAsRegex", () => {
    describe("PLACE commands", () => {
      it("should correctly match valid commands", () => {
        cardinalDirections.forEach((direction) => {
          const command = `PLACE,0,200,${direction}`;
          const isValid = regex.test(command);
          expect(isValid).toBeTruthy();
        });
      });

      it("should correctly fail invalid commands", () => {
        const command = `PLACE 0 0 NORTH`;
        const isValid = regex.test(command);
        expect(isValid).toBeFalsy();
      });
    });
  });
});
