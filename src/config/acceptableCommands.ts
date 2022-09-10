const buildPattern = (commands: string[]): RegExp => {
  return new RegExp(commands.join("|"));
};

const PLACE_REGEX = /^PLACE,\d+,\d+,(NORTH|EAST|SOUTH|WEST)$/;

const commands = [PLACE_REGEX.source];

export const getPatternsAsRegex = () => {
  return buildPattern(commands);
};
