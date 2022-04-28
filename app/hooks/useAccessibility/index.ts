import type { MouseEvent, KeyboardEvent } from "react";

const useAccessibility = () => {
  const handleAriaExpanded = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    const currentAriaExpanded = event.currentTarget.ariaExpanded!;

    currentAriaExpanded === "true"
      ? (event.currentTarget.ariaExpanded = "false")
      : (event.currentTarget.ariaExpanded = "true");
  };

  return { handleAriaExpanded };
};

export { useAccessibility };
