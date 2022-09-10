import { findMatchingPattern, getPatternsAsRegex } from "config/commands";
import { useState } from "react";

const useCommandInput = () => {
  const patterns = getPatternsAsRegex();
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      const command = value.toUpperCase();
      const matchingPattern = findMatchingPattern(command, patterns);
      const isValid = Boolean(matchingPattern);
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
