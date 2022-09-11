import { useState } from "react";

const useDescriptionPopover = () => {
  const [squareDescription, setSquareDescription] =
    useState<HTMLElement | null>(null);

  const handleDescriptionOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setSquareDescription(event.currentTarget);
  };

  const handleDescriptionClose = () => {
    setSquareDescription(null);
  };

  const open = Boolean(squareDescription);

  return {
    open,
    handleDescriptionOpen,
    handleDescriptionClose,
    squareDescription,
  };
};

export default useDescriptionPopover;
