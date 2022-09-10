import { getPatternsAsRegex } from "config/acceptableCommands";
import { KeyboardEventHandler, useState } from "react";

const useCommandInput = () => {
  const pattern = getPatternsAsRegex();
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Enter") {
      const command = value.toUpperCase();
      const isValid = pattern.test(command);
      setError(!isValid);
      setValue("");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setValue(event.currentTarget.value);
  };

  return {
    handleSubmit,
    onChange,
    error,
    setError,
    value,
  };
};

export default useCommandInput;
