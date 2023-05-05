import React from 'react';
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
          <ProjectBox>
            <div>
              <div>
                <span>{i + 1}</span>
              </div>
              <div>
                <p>#프론트</p>
                <p>{v.name}</p>
              </div>
            </div>
            <p>하트 {v.view}</p>
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
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 11px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    div {
      span {
        font-size: 19px;
        font-weight: bold;
        color: #7e7e7e;
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      p:nth-child(1) {
        font-size: 12px;
        font-weight: 500;
        color: #a2a2a2;
      }
      p:nth-child(2) {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;
