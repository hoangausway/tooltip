import React from "react";
import ReactDOM from "react-dom";
import useTouchOutsideEffect from "./useTouchOutsideEffect";
import useEventListenerEffect from "./useEventListenerEffect";
import { sides, points, calculatePosition, elementRect } from "./calculation";
import StyledToolTip from "./styledToolTip";

/*   
    A Hook which returns a 'tooltip' component and a 'ref' for a trigger component.
    
    ARIA: 
      The element that serves as the tooltip has role 'tooltip'
      The element that triggers the tooltip references the tooltip element with 'aria-describedby'
    
    Usage:
      - in consumer's codes, get a ref and a tootltip component as variables 
        by calling useTooltipEffect()
        Ex: const [tipRef, Tip] = useTooltipEffect();
      - add property ref={tipRef} to a trigger component/element waiting for tip
        Ex: <div ref={tipRef}>some contents</div>
      - add a component Tip (next to the above trigger) or anywhere in rendering codes
        Ex: <Tip>tip's contents/children</Tip>
    
    Notes: 
      The name "useTooltipEffect" with the "Effect" suffix is to emphasise that it uses the 
      hooks useEffect and/or useLayoutEffect.
      These hooks (useEffect, useLayoutEffect) are for the tasks raising side effects.
      (The rules for using them at: https://reactjs.org/docs/hooks-rules.html)
  */

const useTooltipEffect = () => {
  // Refs to target and tooltip
  const targetRef = React.useRef();
  const tipRef = React.useRef();

  // Side; default is bottom (sides[0])
  const [side, setSide] = React.useState(sides[0]);

  // Point; default is middle (points[1])
  const [point, setPoint] = React.useState(points[1]);

  // Target's dimensions
  const [targetTop, setTargetTop] = React.useState(0);
  const [targetLeft, setTargetLeft] = React.useState(0);
  const [targetWidth, setTargetWidth] = React.useState(1);
  const [targetHeight, setTargetHeight] = React.useState(1);

  // Tip's dimensions
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [tipWidth, setTipWidth] = React.useState(1);
  const [tipHeight, setTipHeight] = React.useState(1);

  // Convenient function: update target's rect
  const updateTargetRect = () => {
    const targetBounds = elementRect(targetRef.current);
    setTargetTop(targetBounds.top);
    setTargetLeft(targetBounds.left);
    setTargetWidth(targetBounds.width);
    setTargetHeight(targetBounds.height);
  };

  // Convenient function: update tip's size
  const updateTipSize = () => {
    const tipBounds = elementRect(tipRef.current);
    if (tipBounds.width) setTipWidth(tipBounds.width);
    if (tipBounds.height) setTipHeight(tipBounds.height);
  };

  // Measure and positioning in useLayoutEffect: after mounted, before browser's painting
  React.useLayoutEffect(() => {
    // measure dimensions
    updateTargetRect();
    updateTipSize();

    // calculate which side to place the tip (and also the tip's arrow position )
    const tipPosition = calculatePosition(
      {
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: targetHeight
      },
      { width: tipWidth, height: tipHeight },
      { width: window.innerWidth, height: window.innerHeight }
    );

    // silence if not available position for tip displaying
    if (!tipPosition) return;

    // set properties for tip
    // tip will place itself based on corresponding CSS attributes
    setSide(tipPosition.side);
    setPoint(tipPosition.point);
    setTop(parseInt(tipPosition.top, 10));
    setLeft(parseInt(tipPosition.left, 10));
  }, [updateTargetRect, updateTipSize]);
  // End of useLayoutEffect

  // Toggle show-hide
  const [isShown, setIsShow] = React.useState(false);
  const show = () => setIsShow(true);
  const hide = () => setIsShow(false);

  // Show
  useEventListenerEffect("mouseover", show, targetRef.current);
  useEventListenerEffect("mouseleave", hide, targetRef.current);
  useEventListenerEffect("touchstart", show, targetRef.current);

  // Hide
  useEventListenerEffect("scroll", hide);
  useEventListenerEffect("resize", hide);
  useTouchOutsideEffect(targetRef, hide);

  // Define Tooltip functional component
  const Tooltip = props => {
    return ReactDOM.createPortal(
      <StyledToolTip
        isShown={isShown}
        ref={tipRef}
        top={top}
        left={left}
        side={side}
        point={point}
        role={"tooltip"}
      >
        {props.children}
      </StyledToolTip>,
      document.getElementById("modal-root")
    );
  };

  // Return a pair of targetRef and Tooltip.
  return [targetRef, Tooltip];
};

export default useTooltipEffect;
