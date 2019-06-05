/*
  Hoang Nguyen 03 06 2019
  In useEffect, listen to events 'mousedown' and 'touchstart'.
  If event happen outside of the tipRef component, fires the handler.
*/

import React from "react";

const useTouchOutsideEffect = (tipRef, handler) => {
  // Create a ref that stores handler
  const savedHandler = React.useRef();
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    if (!tipRef || !tipRef.current) return;

    // listener to fire handler(event) when click/tap outside of tifRef component
    const listener = event =>
      !tipRef.current.contains(event.target) && savedHandler.current(event);

    // listen to mousedown and touchstart
    document.addEventListener("touchstart", listener);
    document.addEventListener("mousedown", listener);

    // cleanup when unmounted
    return () => {
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("mousedown", listener);
    };
  }, [tipRef.current]);
};

export default useTouchOutsideEffect;
