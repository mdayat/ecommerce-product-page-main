const preventScroll = (event: WheelEvent | TouchEvent) => {
  event.preventDefault();
  event.stopPropagation();
  return;
};

const preventKeyboardScroll = (event: KeyboardEvent) => {
  const keyCode = [
    " ",
    "Tab",
    "PageUp",
    "PageDown",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
  ];

  if (!keyCode.includes(event.key)) return;

  event.preventDefault();
  event.stopPropagation();
  return;
};

export { preventKeyboardScroll, preventScroll };
