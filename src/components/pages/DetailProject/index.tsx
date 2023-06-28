import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo';
import HashTag from './HashTag';
import Profile from './Profile';
import CommentList from './CommentList';
import MemberList from './MemberList';

const index = () => {
  return (
    <DetailProjectContainer>
      <Title />
      <ProjectInfoWrap>
        <ProjectInfo />
        <HashTag />
        <CommentList />
      </ProjectInfoWrap>
      <Profile />
      <MemberList />
    </DetailProjectContainer>
  );
};

export default index;

const DetailProjectContainer = styled.table`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectInfoWrap = styled.div`
  flex: 3;
`;
