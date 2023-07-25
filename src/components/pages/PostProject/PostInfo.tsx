import React from 'react';
import styled from 'styled-components';
import InputNumber from './InputNumber';

const PostInfo = () => {
  return (
    <ProjectInfoContainer>
      <Row>
        <div>
          <ProjectInfoLabel htmlFor="projectName">프로젝트이름</ProjectInfoLabel>
          <ProjectInfoInput type="text" id="projectName" placeholder="글을 입력해주세요" />
        </div>
        <div>
          <ProjectInfoLabel htmlFor="projectDate">프로젝트 시작일자</ProjectInfoLabel>
          <ProjectInfoInput type="date" id="projectDate" />
        </div>
      </Row>
      <ProjectInfoLabel>모집 인원</ProjectInfoLabel>
      <InputNumber />
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
  gap: 134px;
  margin-bottom: 54px;
`;
const ProjectInfoInput = styled.input`
  border: 1.5px solid #e1e1e1;
  border-radius: 2px;
  width: 496px;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  color: #7e7e7e;
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
  }
`;
const ProjectInfoLabel = styled.label`
  display: block;
  margin-right: 10px;
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 16px;
`;
