import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import ProjectInfo from './ProjectInfo';
import Description from './Description';
import HashTag from './HashTag';
import Profile from './Profile';
import CommentList from './CommentList';
import MemberList from './MemberList';

const index = () => {
  return (
    <DetailProjectContainer>
      <Title />
      <FirstRow>
        <ProjectInfoWrap>
          <ProjectInfo />
          <Description />
          <HashTag />
          <CommentList />
        </ProjectInfoWrap>
        <ProfileWrap>
          <Profile />
          <MemberList />
        </ProfileWrap>
      </FirstRow>
    </DetailProjectContainer>
  );
};

export default index;

const DetailProjectContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 0;
`;

const FirstRow = styled.div`
  display: flex;
`;

const ProjectInfoWrap = styled.div`
  flex: 3;
`;
const ProfileWrap = styled.div`
  flex: 1;
`;
