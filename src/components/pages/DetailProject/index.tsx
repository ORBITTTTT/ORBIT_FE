import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo';
import CommentList from './CommentList';
import ApplyBtnList from './ApplyBtnList';

const index = () => {
  return (
    <>
      <DetailProjectContainer>
        <Title />
        <ProjectInfoWrap>
          <ProjectInfo />
        </ProjectInfoWrap>
      </DetailProjectContainer>
      <ApplyBtnList />

      <DetailProjectContainer>
        <ProjectInfoWrap>
          <CommentList />
        </ProjectInfoWrap>
      </DetailProjectContainer>
    </>
  );
};

export default index;

const DetailProjectContainer = styled.table`
  width: 80%;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 66px;
`;

const ProjectInfoWrap = styled.div`
  flex: 3;
`;
