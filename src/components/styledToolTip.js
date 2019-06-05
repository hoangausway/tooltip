import styled, { css } from "styled-components";

/*
  props and values:
    isShown: "block", "none"
    top, left: numbers
    side: "bottom", "top", "right", "left"
    point: "left", "middle", "right"
*/
const StyledToolTip = styled.div`
  display: ${props => (props.isShown ? "block" : "none")};
  position: fixed;
  top: ${props => props.top + "px"};
  left: ${props => props.left + "px"};
  padding: 12px;
  opacity: 0.95;
  font-size: 0.8rem;
  font-family: "Imprima", sans-serif;
  background-color: #a5dee5;
  border-radius: 3px;
  ${props =>
    props.side === "bottom" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        bottom: 100%; /* Look up */
        ${props =>
          props.point === "left"
            ? css`left: 10%`
            : props.point === "right"
            ? css`right: 10%`
            : css`left: 50%`};
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #a5dee5;
      }
    `};
  ${props =>
    props.side === "top" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        top: 100%; /* Look down */
        ${props =>
          props.point === "left"
            ? css`left: 10%`
            : props.point === "right"
            ? css`right: 10%`
            : css`left: 50%`};
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid #a5dee5;
      }
    `};
  ${props =>
    props.side === "right" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        right: 100%; /* Look right */
        top: 40%;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #a5dee5;
      }
    `};
  ${props =>
    props.side === "left" &&
    css`
      &::after {
        content: " ";
        position: absolute;
        left: 100%; /* Look left */
        top: 40%;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #a5dee5;
      }
    `};
`;
export default StyledToolTip;
