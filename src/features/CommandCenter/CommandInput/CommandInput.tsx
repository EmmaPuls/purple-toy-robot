import TextInput from "components/TextInput";
import { FC } from "react";

const CommandInput: FC = () => {
  return (
    <div>
      <TextInput
        id={"CommandInput"}
        label={"Command Input"}
        size={16}
        inputStyles={{ flexGrow: 3 }}
        labelStyles={{ flexGrow: 1, whiteSpace: "nowrap" }}
      />
    </div>
  );
};

export default CommandInput;
