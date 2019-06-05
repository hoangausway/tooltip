import React from "react";
import styled, { css } from "styled-components";

import useTooltipEffect from "./useTooltipEffect";

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 3px;
  width: 100%;
  height: 90vh;
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flext-start;
`;

const StyledMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledDiv = styled.div`
  border-radius: 3px;
  color: white;
  background: OliveDrab;
  font-size: 1rem;
  height: 26px;
  padding: 6px;
`;

const StyledExtra = styled.div`
  width: 30%;
  height: 300px;
  background: DarkRed;
  border-radius: 3px;
  margin-top: 12px;
  padding: 12px;
  text-align: center;
  color: white;
`;

const TestNinePlaces = () => {
  const [ref11, Tip11] = useTooltipEffect();
  const [ref12, Tip12] = useTooltipEffect();
  const [ref13, Tip13] = useTooltipEffect();
  const [ref21, Tip21] = useTooltipEffect();
  const [ref22, Tip22] = useTooltipEffect();
  const [ref23, Tip23] = useTooltipEffect();
  const [ref31, Tip31] = useTooltipEffect();
  const [ref32, Tip32] = useTooltipEffect();
  const [ref33, Tip33] = useTooltipEffect();

  const [refLeft, TipLeft] = useTooltipEffect();
  const [refRight, TipRight] = useTooltipEffect();

  return (
    <React.Fragment>
      <StyledGrid>
        <StyledTop>
          <StyledDiv ref={ref11}>
            Open tooltip<Tip11>Tip on top-left</Tip11>
          </StyledDiv>
          <StyledDiv ref={ref12}>
            Open tooltip<Tip12>Tip on top-center</Tip12>
          </StyledDiv>
          <StyledDiv ref={ref13}>
            Open tooltip<Tip13>Tip on top-right</Tip13>
          </StyledDiv>
        </StyledTop>
        <StyledMiddle>
          <StyledDiv ref={ref21}>
            Open tooltip<Tip21>Tip on middle-left</Tip21>
          </StyledDiv>
          <StyledDiv ref={ref22}>
            Open tooltip<Tip22>Tip on middle-center</Tip22>
          </StyledDiv>
          <StyledDiv ref={ref23}>
            Open tooltip<Tip23>Tip on middle-right</Tip23>
          </StyledDiv>
        </StyledMiddle>
        <StyledBottom>
          <StyledDiv ref={ref31}>
            Open tooltip<Tip31>Tip on bottom-left</Tip31>
          </StyledDiv>
          <StyledDiv ref={ref32}>
            Open tooltip<Tip32>Tip on bottom-center</Tip32>
          </StyledDiv>
          <StyledDiv ref={ref33}>
            Open tooltip<Tip33>Tip on bottom-right</Tip33>
          </StyledDiv>
        </StyledBottom>
      </StyledGrid>
      <StyledBottom>
        <StyledExtra ref={refLeft}>
          <p>Shrink window height and scroll down!</p>
          <p>If not enough bottom and top space, the tip will be appeared on the RIGHT side of target.</p>
          <TipLeft>Tip tip</TipLeft>
        </StyledExtra>
        <StyledExtra ref={refRight}>
          <p>Shrink window height and scroll down!</p>
          <p>If not enough bottom and top space, the tip will be appeared on the left side of target.</p>
          <TipRight>Tip tip.</TipRight>
        </StyledExtra>
      </StyledBottom>
    </React.Fragment>
  );
};

export default TestNinePlaces;
