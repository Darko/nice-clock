import React from "react";
import styled from "styled-components";

const arrowSizes = {
  hours: {
    width: 4,
    height: 70
  },
  minutes: {
    width: 4,
    height: 100
  },
  seconds: {
    width: 2,
    height: 100
  }
};

const getRotation = ({ state, type }) => {
  let v = state[type];
  if (type === "hours" && v > 12) {
    v = state[type] - 12;
    v = v + state.minutes / 60;
    return v * 30; // The angle between 2 hours is 30deg (360 / 12)
  }

  return v * 6; // The angle between each minute tick is 6deg (360 / 60)
};

const StyledArrow = styled.div`
  width: ${props => arrowSizes[props.type].width}px;
  height: ${props => arrowSizes[props.type].height}px;
  background-color: #333;
  position: absolute;
  left: 50%;
  bottom: 50%;
  margin-left: -2px;
  transform-origin: 2px 100%;
  transform: rotate(${getRotation}deg);
`;

const Arrow = props => <StyledArrow {...props} />;

export default Arrow;