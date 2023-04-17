import React from 'react';
import styled from 'styled-components';

const ProjectInfo = () => {
  return (
    <ProjectInfoContainer>
      <InfoList>
        <InfoItem>
          <Row>
            <InfoTitle>프로젝트이름</InfoTitle>독서 플랫폼 사이드 프로젝트 함께 할 팀원을 찾습니다
          </Row>
        </InfoItem>
        <InfoItem>
          <Row>
            <InfoTitle>프로젝트 시작일</InfoTitle> 2023-04-13
          </Row>
        </InfoItem>
      </InfoList>
      <InfoList>
        <InfoItem>
          <InfoTitle>모집인원</InfoTitle>
        </InfoItem>
        <InfoItem>
          <Row>
            <InfoTitle>Backend</InfoTitle> 1명
            <ApplyBtn>신청하기</ApplyBtn>
          </Row>
        </InfoItem>
        <InfoItem>
          <Row>
            <InfoTitle>Frontend</InfoTitle> 2명
            <ApplyBtn>신청하기</ApplyBtn>
          </Row>
        </InfoItem>
        <InfoItem>
          <Row>
            <InfoTitle>Designer</InfoTitle> 1명
            <ApplyBtn>신청하기</ApplyBtn>
          </Row>
        </InfoItem>
        <InfoItem>
          <Row>
            <InfoTitle>PM</InfoTitle> 1명
            <ApplyBtn>신청하기</ApplyBtn>
          </Row>
        </InfoItem>
      </InfoList>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoTitle = styled.p`
  font-weight: bold;
`;

const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;
const InfoItem = styled.li`
  display: block;
  margin-bottom: 10px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ApplyBtn = styled.button`
  background-color: #eee;
  padding: 5px;
  border-radius: 3px;
`;
