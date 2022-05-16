import type {
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
} from "react";

import { useAccessibility } from "@hooks";

type AccessibilityHandlerTypes = {
  isButtonClicked: boolean;
  setIsButtonClicked: Dispatch<SetStateAction<boolean>>;
};

const useAccessibilityHandler = () => {
  const { handleAriaExpanded } = useAccessibility();

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
    {
      isButtonClicked = false,
      setIsButtonClicked = () => {},
    }: AccessibilityHandlerTypes
  ) => {
    if (event.clientX === 0 && event.clientY === 0)
      return event.preventDefault();

    isButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true);
    handleAriaExpanded(event.currentTarget);
  };

  const handleButtonPressed = (
    event: KeyboardEvent<HTMLButtonElement>,
    {
      isButtonClicked = false,
      setIsButtonClicked = () => {},
    }: AccessibilityHandlerTypes
  ) => {
    if (event.code !== "Enter") return;

    isButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true);
    handleAriaExpanded(event.currentTarget);
  };

  return { handleButtonClick, handleButtonPressed };
};

export { useAccessibilityHandler };
