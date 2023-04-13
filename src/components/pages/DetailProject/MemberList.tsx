import React from 'react';
import styled from 'styled-components';

const MemberList = () => {
  return (
    <MemberListContainer>
      <h4>참여인원</h4>
      <ul>
        <MemberItem>
          <ImgWrap>
            <ProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
          </ImgWrap>
          안녕토마스 (Designer)
          <AcceptBtn>거절</AcceptBtn>
          <AcceptBtn>수락</AcceptBtn>
        </MemberItem>
        <MemberItem>
          <ImgWrap>
            <ProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
          </ImgWrap>
          안녕토마스 (Frontend)
          <AcceptBtn>거절</AcceptBtn>
          <AcceptBtn>수락</AcceptBtn>
        </MemberItem>
      </ul>
    </MemberListContainer>
  );
};

export default MemberList;
const MemberListContainer = styled.div`
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
`;
const AcceptBtn = styled.button`
  background-color: #eee;
  padding: 5px;
  border-radius: 3px;
`;
const MemberItem = styled.li`
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
