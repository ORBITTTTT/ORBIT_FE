import React, { useState } from 'react';
import styled from 'styled-components';

const Title = () => {
  const [isHeart, setIsHeart] = useState(false);

  const handleIsHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <>
      <TitleContainer>
        <div>
          <ProjectStatus>모집중</ProjectStatus>
          <ProjectName>음악컨텐츠 관련 프로젝트 팀원 모집할까 합니다.</ProjectName>
          <ProjectDate>
            <p>프로젝트 등록일</p>
            <p>2023.07.25</p>
            <p>180</p>
            <p>1500</p>
          </ProjectDate>
        </div>
        <BtnWrap>
          <button>수정</button>
          <button>삭제</button>
          <button>공유</button>
          <HeartBtn onClick={handleIsHeart}>{isHeart ? '❤️' : '🤍'}</HeartBtn>
        </BtnWrap>
      </TitleContainer>
      <Hr />
    </>
  );
};

export default Title;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectStatus = styled.span`
  display: inline-block;
  padding: 5px 13px;
  color: var(--pointcolor, #1560fb);
  font-size: 14px;
  font-weight: 500;
  border-radius: 35px;
  border: 1.7px solid var(--pointcolor, #1560fb);
  margin-bottom: 6px;
`;
const ProjectName = styled.p`
  color: var(--gray-1, #1e1e1e);
  font-size: 26px;
  font-weight: 600;
  line-height: 40px;
`;
const ProjectDate = styled.div`
  display: flex;
  gap: 13px;
  color: var(--gray-4, #a2a2a2);
  font-size: 14px;
  margin-bottom: 16px;
`;
const Hr = styled.hr`
  border: 1px solid #e1e1e1;
  margin-bottom: 20px;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const HeartBtn = styled.button``;
