import { getPatternsAsRegex } from "config/acceptableCommands";
import { useState } from "react";

const useCommandInput = () => {
  const pattern = getPatternsAsRegex();
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      const command = value.toUpperCase();
      const isValid = pattern.test(command);
      setError(!isValid);
      setValue("");
    }
  };

  const onChange = (value: string) => {
    if (error) {
      setError(false);
    }
    setValue(value);
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
