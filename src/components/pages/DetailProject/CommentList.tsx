import React from 'react';
import styled from 'styled-components';

const CommentList = () => {
  return (
    <CommentListContainer>
      <h3>댓글 목록 (3)</h3>
      <ProfileWrap>
        <Row>
          <p>참여하고싶어요!</p>
          <span>2023.04.13</span>
        </Row>
        <Row>
          <ImgWrap>
            <ProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
          </ImgWrap>
          <p>안녕토마스 (Frontend)</p>
        </Row>
      </ProfileWrap>
    </CommentListContainer>
  );
};

export default CommentList;

const CommentListContainer = styled.div`
  margin-top: 20px;
`;

const ProfileWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ImgWrap = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
