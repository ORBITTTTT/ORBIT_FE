import React from 'react';
import styled from 'styled-components';

type Props = {};

const MainFind = (props: Props) => {
  return (
    <Container>
      <div>
        <p>나의 직무찾기</p>
        <p>내 직무와 관련된 프로젝트를 찾아보세요</p>
      </div>
      <Box>
        <div>프론트엔드</div>
        <div>백엔드</div>
        <div>디자이너</div>
        <div>PM</div>
      </Box>
    </Container>
  );
};

export default MainFind;

const Container = styled.div`
  width: 100%;
  background-color: aquamarine;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 23%;
    aspect-ratio: 1;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
     border-radius: 10px;
  }
`;
