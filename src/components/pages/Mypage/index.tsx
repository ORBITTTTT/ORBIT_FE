import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Evaluation from './Evaluation';
import ProjectList from './ProjectList';

const Mypage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <ProfileContainer>
      <TabMenuContainer>
        <TabMenuItem
          activeTab={activeTab === 'profile'}
          onClick={() => {
            setActiveTab('profile');
          }}
        >
          소개
        </TabMenuItem>
        <TabMenuItem
          activeTab={activeTab === 'projectList'}
          onClick={() => {
            setActiveTab('projectList');
          }}
        >
          프로젝트 목록
        </TabMenuItem>
        <TabMenuItem
          activeTab={activeTab === 'evaluation'}
          onClick={() => {
            setActiveTab('evaluation');
          }}
        >
          만족도 평가
        </TabMenuItem>
      </TabMenuContainer>
      {activeTab === 'profile' && <Profile />}
      {activeTab === 'projectList' && <ProjectList />}
      {activeTab === 'evaluation' && <Evaluation />}
    </ProfileContainer>
  );
};

export default Mypage;
const ProfileContainer = styled.div`
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 120px 0;
`;

const TabMenuContainer = styled.ul`
  display: flex;
  padding: 20px 0;
`;
const TabMenuItem = styled.li<{ activeTab: boolean }>`
  border-bottom: ${(props) => props.activeTab && '2px solid #222'};
  cursor: pointer;
  padding: 10px 15px;
`;
