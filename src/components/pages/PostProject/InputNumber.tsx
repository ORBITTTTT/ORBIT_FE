import React, { useState } from 'react';
import styled from 'styled-components';

const InputNumber = ({ career }: any) => {
  const [value, setValue]: any = useState(0);
  const handleIncrement = () => {
    if (value !== 10) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };
  return (
    <ProjectNumberContainer key={career}>
      <ProjectInfoLabel htmlFor={`${career}Number`}>{career}</ProjectInfoLabel>
      <ProjectNumber>
        <PlusNumberBtn onClick={handleDecrement}>-</PlusNumberBtn>
        <ProjectInfoInput
          type="number"
          value={value}
          min={0}
          max={10}
          step={1}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="0"
          id={`${career}Number`}
        />
        <MinusNumberBtn onClick={handleIncrement}>+</MinusNumberBtn>
      </ProjectNumber>
    </ProjectNumberContainer>
  );
};

export default InputNumber;

const ProjectNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const ProjectNumber = styled.div`
  position: relative;
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    opacity: 0;
  }
`;

const ProjectInfoInput = styled.input`
  padding: 0 15px;
  text-align: center;
`;
const ProjectInfoLabel = styled.label`
  margin-right: 10px;
`;

const PlusNumberBtn = styled.button`
  width: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const MinusNumberBtn = styled.button`
  width: 15px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
