import { useState } from "react";
import { useDispatch } from "react-redux";
import { findMatchingPattern, getPatternsAsRegex } from "../commands";
import { addCommand, EntryType, updateHistory } from "../commandSlice";

const useCommandInput = () => {
  const dispatch = useDispatch();
  const patterns = getPatternsAsRegex();
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      const command = value.toUpperCase();
      const matchingPattern = findMatchingPattern(command, patterns);
      const isValid = Boolean(matchingPattern);
      if(isValid) {
        dispatch(addCommand(command));
        dispatch(updateHistory({ type: EntryType.COMMAND, value: command }));
      }
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
