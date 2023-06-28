import React from 'react';
import styled from 'styled-components';

import PostProject from './PostInfo';
import Editor from './Editor';
import HashTag from './HashTag';

import postProjectBanner from '@assets/postProject/banner.svg';

const index = () => {
  return (
    <div>
      <BannerWrap>
        <img src={postProjectBanner} alt="프로젝트생성배너" />
        <h2>새로운 프로젝트를 등록해봐요</h2>
        <p>나의 프로젝트의 크루원을 모집할 수 있는 프로젝트 설명을 기입해주세요</p>
      </BannerWrap>
      <PostProjectContainer>
        <PostProject />
        <Editor />
        <HashTag />
        <AddProjectBtnWrap>
          <AddProjectBtn>프로젝트 등록</AddProjectBtn>
        </AddProjectBtnWrap>
      </PostProjectContainer>
    </div>
  );
};

export default index;
const PostProjectContainer = styled.div`
  width: 90%;
  max-width: 1230px;
  margin: 0 auto;
  text-align: right;
`;
const AddProjectBtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
`;
const AddProjectBtn = styled.button`
  text-align: center;
  border-radius: 4px;
  background: #1560fb;
  padding: 5px 32px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`;
const BannerWrap = styled.div`
  width: 100%;
  padding-top: 98px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3e3e3e;
  h2 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
  }
`;
