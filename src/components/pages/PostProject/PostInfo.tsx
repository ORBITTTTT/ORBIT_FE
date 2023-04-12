import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {};

const PostInfo = (props: Props) => {
  const [value, setValue] = useState(0);
  const careerList = ['Backend', 'Frontend', 'Designer', 'PM'];
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
    <ProjectInfoContainer>
      <Row>
        <div>
          <ProjectInfoLabel htmlFor="projectName">프로젝트이름</ProjectInfoLabel>
          <ProjectInfoInput type="text" id="projectName" />
        </div>
        <div>
          <ProjectInfoLabel htmlFor="projectDate">프로젝트 시작일</ProjectInfoLabel>
          <ProjectInfoInput type="date" id="projectDate" />
        </div>
      </Row>
      <h3>모집 인원</h3>
      <Row>
        {careerList.map((career: any) => {
          return (
            <ProjectNumberContainer>
              <ProjectInfoLabel htmlFor={`${career}Number`}>{career}</ProjectInfoLabel>
              <ProjectNumber>
                <PlusNumberBtn onClick={handleDecrement}>-</PlusNumberBtn>
                <ProjectInfoInput
                  type="number"
                  value={value}
                  min={0}
                  max={10}
                  step={1}
                  placeholder="0"
                  id={`${career}Number`}
                />
                <MinusNumberBtn onClick={handleIncrement}>+</MinusNumberBtn>
              </ProjectNumber>
            </ProjectNumberContainer>
          );
        })}
      </Row>
    </ProjectInfoContainer>
  );
};

export default PostInfo;
const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
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
