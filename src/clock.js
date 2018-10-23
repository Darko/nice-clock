import React from "react";
import Arrow from "./arrow";
import styled from "styled-components";

const StyledClock = styled.div`
  color: #333;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 12px currentColor solid;
  position: relative;
  background-color: #fff;
  &:before { 
    content: '';
    width: 115%;
    height: 115%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: rgba(0,0,0,0.05);
    z-index: -1;
    transform: translate(-50%, -50%);
    border: 3px currentColor solid;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  border: 3px currentColor solid;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const ClockNumber = styled.div`
  font-size: 32px;
  line-height: 1;
  color: currentColor;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%);
  margin-top: ${props => {
    if (props.text === 12) {
      return ".8em";
    } else if (props.text === 6) {
      return "-.8em";
    }
  }};
  margin-left: ${props => {
    if (props.text === 9) {
      return ".8em";
    } else if (props.text === 3) {
      return "-.8em";
    }
  }};
`;

const hours = [
  { text: 12, top: 0, left: "50%" },
  { text: 3, top: "50%", left: "100%" },
  { text: 6, top: "100%", left: "50%" },
  { text: 9, top: "50%", left: "0" }
];

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      ...this.getClockState()
    };
  }

  getClockState = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      hours,
      minutes,
      seconds
    };
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.getClockState()
      });
    }, 1000);
  }

  render() {
    return (
      <StyledClock>
        {hours.map(hour => {
          return (
            <ClockNumber {...hour} key={hour.text}>
              {hour.text}
            </ClockNumber>
          );
        })}
        <Arrow state={this.state} type="hours" />
        <Arrow state={this.state} type="minutes" />
        <Arrow state={this.state} type="seconds" />
        <Circle />
      </StyledClock>
    );
  }
}

export default Clock;
