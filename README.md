# Goal: build a solution for adding tooltip to react components
[Short specs is attached at the end of this document.]

This project created using the boilerplate [The Minimal React Webpack Babel Setup]
(https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
Added ESLint

# Dependencies:
- React Hooks (official release in version 16.8, March 2019)
- styled-components

# Install and running
- Install: npm install
- Run: npm start

# Usage:
- in consumer's codes, get a ref and a tootltip component as variables 
  by calling useTooltipEffect()  
  Ex: const [tipRef, Tip] = useTooltipEffect();

- add property ref={tipRef} to a trigger component/element waiting for tip  
  Ex: ```<div ref={tipRef}>some contents</div>```

- add a component Tip (next to the above trigger or anywhere in component codes)  
  Ex: ```<Tip>tip's contents/children</Tip>```

  const SomeComponent = (props) => {  
      ...  
      const [tipRef, Tip] = useTooltipEffect();  
      ...  
      return (  
          ...  
          ...    
          ```div ref={tipRef}>some contents</div>```  
          ....  
          ....  
          ```<Tip>tip's contents/children</Tip>```  
      )  
  }

- in dist/index.html, add  
      ```<div id="modal-root"></div>```  
    The div "modal-root" is the container where the tooltip portals will be attached


# Essential functions/techniques used
#React
- React.useLayoutEffect
- React.useEffect
- React.useRef
- ReactDOM.createPortal: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. We use it to create tooltip component.

#User-defined hooks:
- useTouchOutsideEffect: fired if user tap or click mouse outside of tooltip
- useEventListenerEffect: fired on common events

#DOM
- (Element).getBoundingClientRect: get dimensions of tooltip and target element

# Cross-browser Test
Completed limited tests on
- MacOS 10.13  
Safari 11.0.2  
Chrome Version 74.0.3729.169

- iOS real devices  
iPhone 6s, iOS 12.2  
iPad Mini, iOS 12.2  
iPad Pro, iOS 12.1  

- iOS Simulator  
iPhone 6s, iOS 9.3

- IE 11
Lenovo, IE11
Used User Agent IE 11 from Safari

# Known problems
- In real iOS devices, when zooming, the tooltips are showing at incorrect locations.
[My guess: the function getBoundClientRect works not correctly with zooming in iOS devices.
Or the getBoundingClientRect was not properly used.
Note that, it's worked well with zooming in tested browsers in desktop.]


# Specs
- On a client without a mouse, the tooltip should be activated on tap only, it can be deactivated on scroll or tapping outside of the tooltip
- On a client with a mouse, the tooltip should be activated onMouseOver and deactivated onMouseLeave, also it should deactivate on scroll and resize
- Should support detecting the bounds, e.g. if the tooltip is displayed on left, the tail should correspond to it, see example below. A good idea to demo it displaying in corners and top, right, bottom, left bounds.
