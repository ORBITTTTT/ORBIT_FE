import React, { useState } from 'react';
import styled from 'styled-components';

const Title = () => {
  const [isHeart, setIsHeart] = useState(false);

  const handleIsHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <TitleContainer>
      <TitleTextWrap>
        <ProjectName>안녕 프로젝트</ProjectName>
        <ProjectStatus>모집중</ProjectStatus>
      </TitleTextWrap>
      <BtnWrap>
        <HeartBtn onClick={handleIsHeart}>{isHeart ? '❤️' : '🤍'}</HeartBtn>
        <button>수정</button>
        <button>삭제</button>
      </BtnWrap>
    </TitleContainer>
  );
};

export default Title;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const TitleTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProjectName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const ProjectStatus = styled.span``;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const HeartBtn = styled.button``;
