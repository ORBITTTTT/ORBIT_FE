import React from 'react';
import styled from 'styled-components';

const commentsData = [
  {
    id: 1,
    content: '참여하고싶어요!',
    date: '2023.06.24',
    author: '안녕토마스',
    role: 'Frontend',
    profileImg: 'https://avatars.githubusercontent.com/u/88040809?v=4',
  },
  {
    id: 2,
    content: '참여하고싶어요!',
    date: '2023.06.24',
    author: '안녕토마스',
    role: 'Frontend',
    profileImg: 'https://avatars.githubusercontent.com/u/88040809?v=4',
  },
];

const CommentList = () => {
  const currentDate = new Date();

  return (
    <CommentListContainer>
      <CommentTitle>댓글쓰기 ({commentsData.length})</CommentTitle>
      <CommentInput placeholder="프로젝트에 대한 의견을 남겨주세요." />
      <MyInfo>
        <Row>
          <MyInfoImgWrap>
            <MyInfoProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
          </MyInfoImgWrap>
          <p>강해보자고 (프론트엔드)</p>
        </Row>

        <AddCommentBtn>등록하기</AddCommentBtn>
      </MyInfo>
      {commentsData.map((comment) => {
        const commentDate = new Date(comment.date);
        const timeDiff = currentDate.getTime() - commentDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // 1일 = 24시간 * 60분 * 60초 * 1000밀리초

        return (
          <ProfileWrap key={comment.id}>
            <Row>
              <ImgWrap>
                <ProfileImg src={comment.profileImg} alt="작성자프로필사진" />
              </ImgWrap>
            </Row>
            <TextWrap>
              <div>
                <Author>
                  {comment.author} ({comment.role})
                </Author>
                <CommentDate>{comment.content}</CommentDate>
              </div>

              <span>{daysDiff}일 전</span>
            </TextWrap>
          </ProfileWrap>
        );
      })}
    </CommentListContainer>
  );
};

export default CommentList;

const CommentListContainer = styled.div`
  margin-top: 66px;
`;
const CommentTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;
const CommentInput = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  border: 1px solid var(--gray-5, #e1e1e1);
  padding: 16px 22px;
  margin: 16px 0;
  resize: none;
`;
const ProfileWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 40px;
`;

const MyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MyInfoImgWrap = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24.671px;
`;
const MyInfoProfileImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const ImgWrap = styled.div`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
`;
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Author = styled.p`
  color: #000;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.35px;
`;
const AddCommentBtn = styled.button`
  border-radius: 6px;
  background: #0b53e7;
  padding: 5px 32px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.105px;
`;
const CommentDate = styled.span`
  color: var(--gray-4, #a2a2a2);
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.39px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
