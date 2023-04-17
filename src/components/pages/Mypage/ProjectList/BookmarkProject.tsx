import React, { useState } from 'react';
import styled from 'styled-components';

const BookmarkProject = () => {
  const [isHeart, setIsHeart] = useState(false);
  const handleIsHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <div>
      <h2>내가 찜한 프로젝트</h2>
      <BookmarkProjectContainer>
        {[0, 0, 0, 0].map((value) => {
          return (
            <ProjectWrap>
              <ProjectHeader>
                <ProjectJobList>
                  {/* 구인직군 */}
                  <li>Frontend</li>
                  <li>Backend</li>
                </ProjectJobList>
                <button onClick={handleIsHeart}>{isHeart ? '❤️' : '🤍'}</button>
              </ProjectHeader>

              <ProjectTitle>음악컨텐츠 관련 프로젝트 팀원 모집합니다.</ProjectTitle>
              <Description>
                개발자 플랫폼이 적어 스터디/프로젝트 구인에 어려움을 겪을 수 있다 생각해 시작하게 되었습니다. 배포까지
                계획중이며 실서비스 구동이 아닌 사이드 프로젝트로 진행하기에 가볍게 즐겨주실분을 구합니다.
              </Description>
              <HashtagList>
                {/* 해시태그 */}
                <li>#JavaScript</li>
                <li>#React</li>
              </HashtagList>
              <ProfileWrarp>
                <Profile>
                  <ImgWrap>
                    <ProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
                  </ImgWrap>
                  <p>안녕토마스(10km)</p>
                </Profile>
                <ProjectInfo>
                  <p>❤️ 180</p>
                  <p>👁️ 1500</p>
                </ProjectInfo>
              </ProfileWrarp>
            </ProjectWrap>
          );
        })}
      </BookmarkProjectContainer>
    </div>
  );
};

export default BookmarkProject;
const BookmarkProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProjectWrap = styled.div`
  margin-top: 24px;
  width: 360px;
  padding: 15px 20px;
  border: 1px solid #000;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;
const ProjectJobList = styled.ul`
  display: flex;
  gap: 5px;
  li {
    padding: 4px 6px;
    border: 1px solid #3c2bf5;
    border-radius: 30px;
  }
`;
const ProjectTitle = styled.h3`
  margin-bottom: 13px;
`;
const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 40px;
`;
const HashtagList = styled.ul`
  display: flex;
  gap: 5px;
`;

const ProfileWrarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ImgWrap = styled.div`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
