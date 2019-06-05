import React from "react";
import styled from "styled-components";

import useTooltipEffect from "./useTooltipEffect";

const StyledSpan = styled.span`
  font-weight: bold;
  color: DarkRed;
`;

const StyledButton = styled.button`
  height: 200pt;
  font-size: 0.8em;
  text-align: center;
  color: white;
  background-color: Peru;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  width: 30%;
  height: 300px;
  padding: 10px;
  margin: 10px 0px;
  color: white;
  background-color: DarkRed;
`;

const StyledFloatDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: right;
  width: 30%;
  height: 300pt;
  margin: 12px;
  padding: 6px;
  font-size: 0.8em;
  text-align: center;
  color: white;
  background-color: olive;
  border-radius: 5px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.7em
  font-weight: bold;
  background: #fefdca;
  border-radius: 3px;
`;

const StyledContent = styled.div`
  padding: 20px;
  font-family: Arial;
  font-size: 1rem;
`;

const StyledQuestion = styled.span`
  font-weight: bold;
  font-color: MediumBlue;
`;

const TestComponent = () => {
  /* Usage:
    - define a ref and a tootltip component calling useTooltip()
      Ex: const [tipRef, Tip] = useTooltipEffect();
    - add property ref={tipRef} to a trigger component/element waiting for tip
      Ex: <div ref={tipRef}>some contents</div>
    - add a component Tip (next to the above trigger) or anywhere in rendering codes
      Ex: <Tip>tip's contents/children</Tip>
  */
  const [tipRef, Tip] = useTooltipEffect();

  // Allowed to define many refs with Tips
  const [ref2, Tip2] = useTooltipEffect();
  const [ref3, Tip3] = useTooltipEffect();
  const [ref4, Tip4] = useTooltipEffect();
  const [ref5, Tip5] = useTooltipEffect();
  const [ref6, Tip6] = useTooltipEffect();
  const [ref7, Tip7] = useTooltipEffect();
  const [refQuestion1, TipQuestion1] = useTooltipEffect();
  const [refQuestion2, TipQuestion2] = useTooltipEffect();
  const [refQuestion3, TipQuestion3] = useTooltipEffect();
  const [refQuestion4, TipQuestion4] = useTooltipEffect();
  const [refQuestion5, TipQuestion5] = useTooltipEffect();

  return (
    <StyledContent>
      <h1>A Complete Guide to useEffect</h1>
      <p>
        March 9, 2019 •{" "}
        <button ref={tipRef}>
          <span role="img" aria-label="sushi">
            🍱🍱🍱🍱
          </span>{" "}
        </button>{" "}
        49 min read
      </p>
      <p>Dan Abramov</p>
      <Tip>
        <div>I'm a little tip. Sushi sushi!</div>
      </Tip>
      <p>
        <StyledSpan ref={ref6}>When I just started using Hooks</StyledSpan>, I
        was confused by all of those questions too. Even when writing the
        initial docs, I didn’t have a firm grasp on some of the subtleties. I’ve
        since had a few “aha” moments that I want to share with you. This deep
        dive will make the answers to these questions look obvious to you. To
        see the answers, we need to take a step back. The goal of this article
        isn’t to give you a list of bullet point recipes. It’s to help you truly
        “grok” useEffect. There won’t be much to learn. In fact, we’ll spend
        most of our time unlearning. It’s only after I stopped looking at the
        useEffect Hook through the prism of the familiar class lifecycle methods
        that everything came together for me.
        <Tip6>A tip on span element</Tip6>
      </p>
      <StyledDiv ref={ref5}>
        <div>
          <p>A normal styled div. Waiting for tip. Its codes are inside me.</p>
          <p>
            If there is space, the priority tip would be showed at the following positions:
          </p>
          <ol>
            <li>bottom (first priority)</li>
            <li>top (second priority)</li>
            <li>right (third priority)</li>
          </ol>
          <p>No space for tip on the left.</p>
        </div>
        <Tip5>Tip on div</Tip5>
      </StyledDiv>

      <StyledFloatDiv ref={ref2}>
        <div>I'm floating right.</div>
        <br />
        <div>Mouse over me.</div>
        <div>Or touch me!</div>
        <div>To see a tip.</div>
      </StyledFloatDiv>
      <Tip2>
        <div>
          <p>
            <span role="img" aria-label="waving">
              👋
            </span>{" "}
            Hey, I'm a tip.
          </p>
          <p>To close, move the mouse out or touch anywhere outside of me.</p>
        </div>
      </Tip2>
      <br />
      <h3>“Unlearn what you have learned.” — Yoda</h3>
      <p>
        <span role="img" aria-label="thinking">
          🤔{" "}
        </span>
        Why do I sometimes get an old state or prop value inside my effect?
        Effects always “see” props and state from the render they were defined
        in. That helps prevent bugs but in some cases can be annoying. For those
        cases, you can explicitly maintain some value in a mutable ref (the
        linked article explains it at the end). If you think you’re seeing some
        props or state from an old render but don’t expect it, you probably
        missed some dependencies. Try using the lint rule to train yourself to
        see them. A few days, and it’ll be like a second nature to you. See also
        this answer in our FAQ.
      </p>
      <Tip3>Tip for Button 1</Tip3>
      <Tip4>Tip for Button 7</Tip4>
      <h2>TL;DR</h2>
      <p>
        Here’s a quick TLDR if you don’t want to read the whole thing. If some
        parts don’t make sense, you can scroll down until you find something
        related.
      </p>
      <p>
        Feel free to skip it if you plan to read the whole post. I’ll link to it
        at the end.
      </p>
      <p>
        <span role="img" aria-label="thinking">
          🤔
        </span>{" "}
        <StyledQuestion ref={refQuestion1}>
          Question: How do I replicate componentDidMount with useEffect?
          <TipQuestion1>
            How do I replicate componentDidMount with useEffect?
          </TipQuestion1>
        </StyledQuestion>
      </p>
      <p>
        While you can useEffect(fn, []), it’s not an exact equivalent. Unlike
        componentDidMount, it will capture props and state. So even inside the
        callbacks, you’ll see the initial props and state. If you want to see
        “latest” something, you can write it to a ref. But there’s usually a
        simpler way to structure the code so that you don’t have to. Keep in
        mind that the mental model for effects is different from
        componentDidMount and other lifecycles, and trying to find their exact
        equivalents may confuse you more than help. To get productive, you need
        to “think in effects”, and their mental model is closer to implementing
        synchronization than to responding to lifecycle events.
      </p>
      <p>
        <span role="img" aria-label="thinking">
          🤔
        </span>{" "}
        <StyledQuestion ref={refQuestion2}>
          Question: How do I correctly fetch data inside useEffect? What is []?
          <TipQuestion2>
          How do I correctly fetch data inside useEffect? What is []?
          </TipQuestion2>
        </StyledQuestion>
      </p>
      <p>
        This article is a good primer on data fetching with useEffect. Make sure
        to read it to the end! It’s not as long as this one. [] means the effect
        doesn’t use any value that participates in React data flow, and is for
        that reason safe to apply once. It is also a common source of bugs when
        the value actually is used. You’ll need to learn a few strategies
        (primarily useReducer and useCallback) that can remove the need for a
        dependency instead of incorrectly omitting it.
      </p>
      <p>
        <span role="img" aria-label="thinking">
          🤔
        </span>{" "}
        <StyledQuestion ref={refQuestion3}>
          Question: Do I need to specify functions as effect dependencies or
          not?
          <TipQuestion3>
          Do I need to specify functions as effect dependencies or not?
          </TipQuestion3>
        </StyledQuestion>
      </p>
      <p>
        The recommendation is to hoist functions that don’t need props or state
        outside of your component, and pull the ones that are used only by an
        effect inside of that effect. If after that your effect still ends up
        using functions in the render scope (including function from props),
        wrap them into useCallback where they’re defined, and repeat the
        process. Why does it matter? Functions can “see” values from props and
        state — so they participate in the data flow. There’s a more detailed
        answer in our FAQ.
      </p>
      <p>
        <span role="img" aria-label="thinking">
          🤔
        </span>{" "}
        <StyledQuestion ref={refQuestion4}>
          Question: Why do I sometimes get an infinite refetching loop?
          <TipQuestion4>
            Why do I sometimes get an infinite refetching loop?
          </TipQuestion4>
        </StyledQuestion>
      </p>
      <p>
        This can happen if you’re doing data fetching in an effect without the
        second dependencies argument. Without it, effects run after every render
        — and setting the state will trigger the effects again. An infinite loop
        may also happen if you specify a value that always changes in the
        dependency array. You can tell which one by removing them one by one.
        However, removing a dependency you use (or blindly specifying []) is
        usually the wrong fix. Instead, fix the problem at its source. For
        example, functions can cause this problem, and putting them inside
        effects, hoisting them out, or wrapping them with useCallback helps. To
        avoid recreating objects, useMemo can serve a similar purpose.
      </p>
      <p>
        <span role="img" aria-label="thinking">
          🤔
        </span>{" "}
        <StyledQuestion ref={refQuestion5}>
          Question: Why do I sometimes get an old state or prop value inside my
          effect?
          <TipQuestion5>
            Why do I sometimes get an old state or prop value inside my effect?
          </TipQuestion5>
        </StyledQuestion>
      </p>
      <p>
        Effects always “see” props and state from the render they were defined
        in. That helps prevent bugs but in some cases can be annoying. For those
        cases, you can explicitly maintain some value in a mutable ref (the
        linked article explains it at the end). If you think you’re seeing some
        props or state from an old render but don’t expect it, you probably
        missed some dependencies. Try using the lint rule to train yourself to
        see them. A few days, and it’ll be like a second nature to you. See also
        this answer in our FAQ.
      </p>
      <StyledDiv ref={ref7}>
        Left-End
        <Tip7>Left-End-Left-End Left-End-Left-End</Tip7>
      </StyledDiv>
      <StyledSection>
        <StyledButton ref={ref3}>Button 1</StyledButton>
        <StyledButton>Button 2</StyledButton>
        <StyledButton>Button 3</StyledButton>
        <StyledButton>Button 4</StyledButton>
        <StyledButton>Button 5</StyledButton>
        <StyledButton>Button 6</StyledButton>
        <StyledButton ref={ref4}>Button 7</StyledButton>
      </StyledSection>
    </StyledContent>
  );
};

export default TestComponent;
