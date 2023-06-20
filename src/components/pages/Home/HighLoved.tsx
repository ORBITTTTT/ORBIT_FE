import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

type Props = {};

const HighLoved = (props: Props) => {
  const list = [
    { name: '안그래 프로젝트', view: 1200 },
    { name: '그래 프로젝트', view: 120 },
    { name: '왜그래 프로젝트', view: 120 },
    { name: '빙그래 프로젝트', view: 120 },
    { name: '그래프 프로젝트', view: 120 },
  ];

  return (
    <Container>
      <Head>
        <ProjectTitle>
          <div>인기있는 프로젝트</div>
          <p>23.04.04 21:00 기준</p>
        </ProjectTitle>
        <div>더보기</div>
      </Head>
      <List>
        {list.map((v, i) => (
          <ProjectBox key={i}>
            <div>
              <span>{i + 1}</span>
            </div>
            <div>
              <div>#프론트</div>
              <div>
                <p>{v.name}</p> <p><AiFillHeart/> {v.view}</p>
              </div>
            </div>
          </ProjectBox>
        ))}
      </List>
    </Container>
  );
};

export default HighLoved;

const Container = styled.div`
  width: 38%;
  /* background-color: #ddd; */
  /* height: 300px; */
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
  div {
    text-align: left;
    p {
      font-size: 12px;
      color: #7e7e7e;
    }
  }
`;
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    font-size: 18px;
    font-family: Pretendard;

    font-weight: bold;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: white;
  padding: 11px;
  width: 100%;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
    /* align-items: center; */
    flex-direction: column;
    width: 100%;
    div:nth-child(1) {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      color: #a2a2a2;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      p:nth-child(1) {
        font-size: 16px;
        font-weight: 600;
      }
      p:nth-child(2) {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  div:nth-child(1) {
    width: 10%;
    span {
      font-size: 19px;
      font-weight: bold;
      color: #7e7e7e;
    }
  }
`;
