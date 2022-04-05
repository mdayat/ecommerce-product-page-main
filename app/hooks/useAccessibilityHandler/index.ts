import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction } from "react";

import { useAccessibility } from "../useAccessibility";

interface AccessibilityHandlerProps {
  isButtonCollapsed: boolean;
  setIsButtonCollapsed: Dispatch<SetStateAction<boolean>>;
}

const useAccessibilityHandler = () => {
  const { handleAriaExpanded } = useAccessibility();

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
    {
      isButtonCollapsed = false,
      setIsButtonCollapsed = () => {},
    }: AccessibilityHandlerProps
  ) => {
    if (event.clientX === 0 && event.clientY === 0)
      return event.preventDefault();

    isButtonCollapsed
      ? setIsButtonCollapsed(false)
      : setIsButtonCollapsed(true);
    handleAriaExpanded(event);
  };

  const handleButtonPressed = (
    event: KeyboardEvent<HTMLButtonElement>,
    {
      isButtonCollapsed = false,
      setIsButtonCollapsed = () => {},
    }: AccessibilityHandlerProps
  ) => {
    if (event.code !== "Enter") return;

    isButtonCollapsed
      ? setIsButtonCollapsed(false)
      : setIsButtonCollapsed(true);
    handleAriaExpanded(event);
  };

  return { handleButtonClick, handleButtonPressed };
};

export { useAccessibilityHandler };
