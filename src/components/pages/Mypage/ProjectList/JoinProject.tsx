import React from 'react';
import styled from 'styled-components';

const JoinProject = () => {
  return (
    <JoinProjectContainer>
      <h2>참여중인 프로젝트</h2>
      <ProjectListWrap>
        <li>
          <Row>
            <ProjectTitle>음악컨텐츠 관련 프로젝트 팀원 모집합니다.</ProjectTitle>
            <p>2023.04.18</p>
          </Row>
          <Row>
            <NumberWrap>
              <h4>구성 인원</h4>
              <ul>
                <li>Frontend 2 명</li>
                <li>Backend 2 명</li>
                <li>Designer 1 명</li>
                <li>PM 1 명</li>
              </ul>
            </NumberWrap>
            <DescriptionWrap>
              <h4>설명</h4>
              <Description>
                개발자 플랫폼이 적어 스터디/프로젝트 구인에 어려움을 겪을 수 있다 생각해 시작하게 되었습니다. 배포까지
                계획중이며 실서비스 구동이 아닌 사이드 프로젝트로 진행하기에 가볍게 즐겨주실분을 구합니다.
              </Description>
            </DescriptionWrap>
          </Row>
        </li>
      </ProjectListWrap>
    </JoinProjectContainer>
  );
};

export default JoinProject;
const JoinProjectContainer = styled.div`
  width: 870px;
`;
const ProjectListWrap = styled.ul`
  margin-top: 20px;
`;
const ProjectTitle = styled.h3`
  margin-bottom: 18px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberWrap = styled.div`
  display: flex;
  gap: 50px;
  flex: 1;
`;
const DescriptionWrap = styled.div`
  display: flex;
  gap: 50px;
  flex: 3;
`;
const Description = styled.p`
  width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 40px;
`;
