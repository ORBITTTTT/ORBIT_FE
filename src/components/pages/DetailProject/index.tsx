import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo';
import HashTag from './HashTag';
import Profile from './Profile';
import CommentList from './CommentList';

const index = () => {
  return (
    <DetailProjectContainer>
      <Title />
      <ProjectInfoWrap>
        <ProjectInfo />
        <HashTag />
        <Profile />
        <CommentList />
      </ProjectInfoWrap>
    </DetailProjectContainer>
  );
};

export default index;

const DetailProjectContainer = styled.table`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 66px;
`;

const ProjectInfoWrap = styled.div`
  flex: 3;
`;
