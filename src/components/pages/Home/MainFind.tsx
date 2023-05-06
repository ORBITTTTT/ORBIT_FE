import React from 'react';
import styled from 'styled-components';

type Props = {};

const MainFind = (props: Props) => {
  return (
    <Container>
      <Title>
        <p>나의 직무에 맞는 프로젝트를 찾아보세요</p>
      </Title>
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
  width: 95%;
  padding-block: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    width: 20%;
    aspect-ratio: 1;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-weight: bold;
  }
`;
