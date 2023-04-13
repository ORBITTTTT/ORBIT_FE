import React, { useState } from 'react';
import styled from 'styled-components';
import InputNumber from './InputNumber';

type Props = {};

const PostInfo = (props: Props) => {
  const careerList = ['Backend', 'Frontend', 'Designer', 'PM'];

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
          return <InputNumber key={career} career={career} />;
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
const ProjectInfoInput = styled.input`
  padding: 0 15px;
  text-align: center;
`;
const ProjectInfoLabel = styled.label`
  margin-right: 10px;
`;
