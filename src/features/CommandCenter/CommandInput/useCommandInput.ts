import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { findMatchingPattern, getPatternsAsRegex } from "../commands";
import { EntryType, updateHistory } from "../commandSlice";
import { handleCommand } from "../handleCommandThunk";

/**
 * Custom hook to handle the command input
 */
const useCommandInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const patterns = getPatternsAsRegex();
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      const command = value.toUpperCase();
      const matchingPattern = findMatchingPattern(command, patterns);
      const isValid = Boolean(matchingPattern);
      if (isValid && matchingPattern) {
        dispatch(handleCommand({ command, matchingPattern }));
      } else {
        dispatch(
          updateHistory([
            {
              type: EntryType.ERROR,
              value: `Invalid command:
              ${command}`,
            },
          ])
        );
        setError(!isValid);
      }
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
    value,
  };
};

export default useCommandInput;
