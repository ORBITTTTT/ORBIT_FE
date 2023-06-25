import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Evaluation from './Evaluation';
import ProjectList from './ProjectList';
import Header from './Header';

const Mypage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <ProfileContainer>
      <Header />
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
      <UnderTab>
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'projectList' && <ProjectList />}
        {activeTab === 'evaluation' && <Evaluation />}
      </UnderTab>
    </ProfileContainer>
  );
};

export default Mypage;

const ProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TabMenuContainer = styled.ul`
  display: flex;
  padding: 60px 10%;
`;

const UnderTab = styled.div`
  padding: 20px 10% 100px;
`;

const TabMenuItem = styled.li<{ activeTab: boolean }>`
  border-bottom: ${(props) => props.activeTab && '2px solid #1560FB'};
  color: ${(props) => (props.activeTab ? '#1560FB' : '#7E7E7E')};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 45px;
`;
