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
          <p>기준</p>
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
            <p>눈{v.view}</p>
          </ProjectBox>
        ))}
      </List>
    </Container>
  );
};

export default HighLoved;

const Container = styled.div`
  width: 38%;
  background-color: #ddd;
  /* height: 300px; */
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
  div {
    text-align: left;
  }
`;
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    font-size: 18px;
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

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      p:nth-child(1){
        font-size: 10px;
      }
      p:nth-child(2){
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;
