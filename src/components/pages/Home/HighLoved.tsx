import React from 'react';
import styled from 'styled-components';

type Props = {};

const HighLoved = (props: Props) => {
  const list = [
    { name: '안그래 프로젝트', head: '안녕 토마스' },
    { name: '그래 프로젝트', head: '안녕 토마스' },
    { name: '왜그래 프로젝트', head: '안녕 토마스' },
    { name: '빙그래 프로젝트', head: '안녕 토마스' },
    { name: '그래프 프로젝트', head: '안녕 토마스' },
  ];

  return (
    <Container>
      <Head>
        <div>
          <div>인기있는 프로젝트</div>
          <p>기준</p>
        </div>
        <div>더보기</div>
      </Head>
      <List>
        {list.map((v, i) => (
          <p>
            <span>{i + 1}</span>
            <span>{v.name}</span>
            <span>{v.head}</span>
          </p>
        ))}
      </List>
    </Container>
  );
};

export default HighLoved;

const Container = styled.div`
  width: 38%;
  background-color: aquamarine;
  /* height: 300px; */
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  div {
    text-align: left;
  }
`;

const List = styled.div`
  p {
    display: flex;
    justify-content: space-between;
  }
`;
