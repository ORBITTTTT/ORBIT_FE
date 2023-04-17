import React from 'react';
import styled from 'styled-components';

const WaitingProject = () => {
  return (
    <WaitingProjectContainer>
      <h2>참여 대기중인 프로젝트</h2>
      <ProjectList>
        <ProjectItem>
          <p>음악컨텐츠 관련 프로젝트 팀원 모집합니다</p>
          <span>대기중</span>
        </ProjectItem>
        <ProjectItem>
          <p>음악컨텐츠 관련 프로젝트 팀원 모집합니다</p>
          <span>수락</span>
        </ProjectItem>
        <ProjectItem>
          <p>음악컨텐츠 관련 프로젝트 팀원 모집합니다</p>
          <span>거절</span>
        </ProjectItem>
      </ProjectList>
    </WaitingProjectContainer>
  );
};

export default WaitingProject;

const WaitingProjectContainer = styled.div`
  width: 420px;
`;
const ProjectList = styled.ul`
  margin-top: 20px;
`;
const ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 11px 18px;
  border-bottom: 1px solid #999;
`;
