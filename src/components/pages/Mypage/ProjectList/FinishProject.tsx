import React from 'react';
import styled from 'styled-components';

const FinishProject = () => {
  return (
    <FinishProjectContainer>
      <h2>완료된 프로젝트</h2>
      <ProjectListWrap>
        {[0, 0, 0, 0].map(() => {
          return (
            <ProjectItemList>
              <ProjectItem>
                <h3>영화컨텐츠 관련 프로젝트 팀원 모집합니다.</h3>
                <Description>
                  개발자 플랫폼이 적어 스터디/프로젝트 구인에 어려움을 겪을 수 있다 생각해 시작하게 되었습니다. 배포까지
                  계획중이며 실서비스 구동이 아닌 사이드 프로젝트로 진행하기에 가볍게 즐겨주실분을 구합니다.
                </Description>
                <p>2023.05.20 - 2023.07.20</p>
                <EvaluationBtn>팀원 평가하기</EvaluationBtn>
              </ProjectItem>
            </ProjectItemList>
          );
        })}
      </ProjectListWrap>
    </FinishProjectContainer>
  );
};

export default FinishProject;

const FinishProjectContainer = styled.div`
  margin-top: 60px;
`;
const ProjectListWrap = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const ProjectItemList = styled.li`
  width: 430px;
`;
const ProjectItem = styled.div`
  border: 1px solid #000;
  padding: 30px;
`;
const EvaluationBtn = styled.button`
  padding: 5px 8px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
`;
const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 40px;
  margin-top: 17px;
`;
