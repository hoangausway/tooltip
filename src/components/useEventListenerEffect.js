/*
  Hoang Nguyen 03 06 2019

  This hook is borrowed from usehooks.com
*/
import React from 'react';

function useEventListener(eventName, handler, element = global){
  // Create a ref that stores handler
  const savedHandler = React.useRef();
  
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      // Create event listener that calls handler function stored in ref
      const listener = event => savedHandler.current(event);
      
      // Add event listener
      element.addEventListener(eventName, listener);
      
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, listener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

export default useEventListener;