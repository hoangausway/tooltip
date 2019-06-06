# Goal: build a solution for adding tooltip to react components
[The problem is stated as a Technical Test. The requirement is attached at the end of this document.]

This project created using the boilerplate [The Minimal React Webpack Babel Setup]
(https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
Added ESLint

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


# Dependencies:
- React Hooks (official release in version 16.8, March 2019)
- styled-components

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
Used User Agent IE 11 from Safari

# Known problems
- In real iOS devices, when zooming, the tooltips are showing at incorrect locations.
[My guess: the function getBoundClientRect works not correctly with zooming in iOS devices.
Or the getBoundingClientRect was not properly used.
Note that, it's worked well with zooming in tested browsers in desktop.]


#[Technical Test Requirement]
We would like you to complete a small exercise to get a better understanding of your coding standards. It has been designed in such a way that will take at most 1 hour given your capability and is not intended to destroy anyone's weekend either. 

Build a Tooltip component (React or Preact)
·  Free to use any tools required at your disposable
·  Would be good to include some linting tools like eslint and stylelint etc.
·  No tests are required due to the timing constraint
·  Keep the code clean, concise, elegant, robust and efficient as possible
·  Please also take accessibility into consideration if time allows it
·  Minimum browser support, IE11+, iOS 9+

Specs:
·  On a client without a mouse, the tooltip should be activated on tap only, it can be deactivated on scroll or tapping outside of the tooltip
·  On a client with a mouse, the tooltip should be activated onMouseOver and deactivated onMouseLeave, also it should deactivate on scroll and resize
·  Should support detecting the bounds, e.g. if the tooltip is displayed on left, the tail should correspond to it, see example below. A good idea to demo it displaying in corners and top, right, bottom, left bounds.

Screen Shot 2019-04-05 at 9.27.59 am.png

Please note this is to show how it looks like, ideally no more than one tooltip should be displayed at one time. 
Hope you find this exercise interesting, please let me know if need any clarification. However if not mentioned it is open-ended and you are free to interpret at your discretion.
