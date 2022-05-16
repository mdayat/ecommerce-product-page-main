const useAccessibility = () => {
  const handleAriaExpanded = (event: HTMLButtonElement) => {
    event.ariaExpanded === "true"
      ? (event.ariaExpanded = "false")
      : (event.ariaExpanded = "true");
  };

  return { handleAriaExpanded };
};

export { useAccessibility };
