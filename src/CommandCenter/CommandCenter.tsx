import TextInput from "components/TextInput";
import { FC } from "react";

const CommandCenter: FC = () => {
  // Add pattern param for command patterns
  return (
    <div>
      <TextInput id={"CommandInput"} label={"Command Input"} size={16} />
    </div>
  );
};

export default CommandCenter;
