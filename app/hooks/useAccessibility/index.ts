const useAccessibility = () => {
  const handleAriaExpanded = (event: HTMLButtonElement) => {
    event.ariaExpanded === "true"
      ? (event.ariaExpanded = "false")
      : (event.ariaExpanded = "true");
  };

  const handleDisabled = (
    event: HTMLButtonElement,
    disabled: boolean,
    ariaDisabled: "true" | "false"
  ) => {
    event.disabled = disabled;
    event.ariaDisabled = ariaDisabled;
  };

  return { handleAriaExpanded, handleDisabled };
};

export { useAccessibility };
