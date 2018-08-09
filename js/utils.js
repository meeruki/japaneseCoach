export const Keycode = {
  ESC: 27,
  ENTER: 13
};

export const isEscEvent = (evt, action) => {
  if (evt.keyCode === Keycode.ESC) {
    action();
  }
};

export const isEnterEvent = (evt, action) => {
  if (evt.keyCode === Keycode.ENTER) {
    action();
  }
};
