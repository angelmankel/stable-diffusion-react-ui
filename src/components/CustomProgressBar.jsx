import React from "react";
import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ffffff2e;
  border-radius: 10px;
  overflow: hidden;
`;

const Filler = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  text-align: center;
  background-color: ${props =>
    props.progress < 100 ? "#4d7fff" : "#5cb85c"
  };
  border-radius: inherit;
  transition: width 0.25s ease-in-out;
`;

const Label = styled.span`
  display: absolute;
  color: #fff;
  font-weight: bold;
  font-size: 14px;

  text-align: center;
`;

const CustomProgressBar = ({ progress }) => {

  return (
    <ProgressBarWrapper>
      <Filler progress={progress}>
        <Label>{progress === 100 ? 'Complete' : `${Math.floor(progress)}%`}</Label>
      </Filler>
    </ProgressBarWrapper>
  );

};

export default CustomProgressBar;
