import React, { useState } from 'react';
import styled from 'styled-components';

const InputNumber = () => {
  const careerList = ['프론트엔드', '백엔드', '디자이너', 'PM'];

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
    <ProjectNumberContainer>
      {careerList.map((career: string) => (
        <ProjectNumberWrap>
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
        </ProjectNumberWrap>
      ))}
    </ProjectNumberContainer>
  );
};

export default InputNumber;

const ProjectNumberContainer = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 42px 0;
`;
const ProjectNumberWrap = styled.div`
  width: 265px;
  gap: 64px;
  display: flex;
  align-items: center;
`;
const ProjectNumber = styled.div`
  position: relative;
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    opacity: 0;
  }
`;

const ProjectInfoInput = styled.input`
  text-align: center;
  width: 57px;
  border: 0;
  padding-left: 15px;
  font-weight: 500;
  font-size: 20px;
  outline: none;
`;
const ProjectInfoLabel = styled.label`
  width: 78px;
`;

const PlusNumberBtn = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  background: #1560fb;
  border-radius: 2px;
  text-align: center;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
`;
const MinusNumberBtn = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  background: #1560fb;
  border-radius: 2px;
  text-align: center;
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
`;
