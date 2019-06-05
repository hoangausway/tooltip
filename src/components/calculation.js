/*
  Hoang Nguyen 03 06 2019
  
  Do calculation to find where to show the tooltip relating to the target component (trigger).
  Based on some assumptions it's also determined the position of the tip's arrow.

  Exports:
    sides: sides = ["bottom", "top", "right", "left"]
    points = ["left", "middle", "right"]
    elementRect = targetEl => {...}
      return: {top, left, width, height}
    calculatePosition = (targetRect, tipSize, winSize) => {...}
      return: {side, point, top, left}
    
*/

// Configuration numbers
const gap = 10; // gap between tip and target rects
const buf = 10; // buffer from window edges

/*
  Array of sides to be showing tip: bottom, top, right, left
  [Assumption 1]:
    Preferability is descending along the array. First in array sides is most preferable.
*/
export const sides = ["bottom", "top", "right", "left"];

/*
  Points are used for positioning tip's arrow: 
  [Assumption 2]:
    horizontal: left, middle, right
    vertical: middle only
*/
export const points = ["left", "middle", "right"];

/*
  Calculate available side to show tooltip.
  Algorithm takes into account the side's preferabilty described by array sides ["bottom", "top", "right", "left"]
  Return: {side, point, top, left}
    - side: where to display tip relating to target
    - point: where to place the tip's arrow
    - top, left:  top/left coordinate of tip's rectangle
*/
export const calculatePosition = (targetRect, tipSize, winSize) => {
  const side = bestSide(targetRect, tipSize, winSize);
  if (!side) return null;

  const positionings = {
    bottom: bottomPositioning,
    top: topPositioning,
    right: rightPositioning,
    left: leftPositioning
  };
  return positionings[side](targetRect, tipSize, winSize);
};

/*
  Returns boundings of element: {top, left, width, height, x, y}
*/
export const elementRect = targetEl => {
  return targetEl.getBoundingClientRect();
};

/*
  Helpers functions
*/

// Return the best choice for the side to be shoing tip.
const bestSide = (targetRect, tipSize, winSize) => {
  const W = winSize.width - buf;
  const H = winSize.height - buf;

  // return available and preferable side; very specific with definitons of sides = ['bottom', 'top', 'right', 'left'];
  const choices = [];
  if (
    (choices[sides[0]] =
      H - targetRect.top - targetRect.height - gap - tipSize.height > 0)
  )
    return sides[0]; // bottom is OK
  if ((choices[sides[1]] = targetRect.top - gap - tipSize.height - buf > 0))
    return sides[1]; // top is OK
  if (
    (choices[sides[2]] =
      W - targetRect.left - targetRect.width - gap - tipSize.width > 0)
  )
    return sides[2]; // right is OK
  if ((choices[sides[3]] = targetRect.left - gap - tipSize.width - buf > 0))
    return sides[3]; // left is OK

  return null;
};

// Horizontal test:
//  - window is divided to 3 columns (left, middle, right)
//  - test if the target belongs to which column
//  - return calculated left coordinate which used by tip
const testLeftRight = (targetRect, tipWidth, winWidth) => {
  const columnWidth = winWidth / 3;
  const targetMiddle = targetRect.left + targetRect.width / 2;
  if (targetMiddle < columnWidth) {
    return { point: "left", left: Math.max(targetRect.left + gap, gap) };
  } else if (targetMiddle < 2 * columnWidth) {
    return {
      point: "middle",
      left: Math.max(targetMiddle - tipWidth / 2, gap)
    };
  } else {
    return {
      point: "right",
      left: targetRect.left + targetRect.width - gap - tipWidth
    };
  }
};

// Vertical test: always vertical align the tip with the target
const testTopBottom = (targetRect, tipHeight) => {
  return {
    point: "middle",
    top: Math.max(targetRect.top + targetRect.height / 2 - tipHeight / 2, gap)
  };
};

// Place tip under target. Tip arrow's position depends on "point" (left, middle, right)
const bottomPositioning = (targetRect, tipSize, winSize) => {
  const { point, left } = testLeftRight(
    targetRect,
    tipSize.width,
    winSize.width
  );
  return {
    side: "bottom",
    point: point,
    top: targetRect.top + targetRect.height + gap,
    left: left
  };
};

// Place tip above target. Tip arrow's position depends on "point" (left, middle, right)
const topPositioning = (targetRect, tipSize, winSize) => {
  const { point, left } = testLeftRight(
    targetRect,
    tipSize.width,
    winSize.width
  );
  return {
    side: "top",
    point: point,
    top: targetRect.top - gap - tipSize.height,
    left: left
  };
};

// Place tip at the right of target. Tip arrow's position always middle.
const rightPositioning = (targetRect, tipSize, winSize) => {
  const { point, top } = testTopBottom(targetRect, tipSize.height);
  return {
    side: "right",
    point: point,
    top: top,
    left: targetRect.left + targetRect.width + gap
  };
};

// Place tip at the left of target. Tip arrow's position alwyas middle.
const leftPositioning = (targetRect, tipSize, winSize) => {
  const { point, top } = testTopBottom(targetRect, tipSize.height);
  return {
    side: "left",
    point: point,
    top: top,
    left: targetRect.left - gap - tipSize.width
  };
};
