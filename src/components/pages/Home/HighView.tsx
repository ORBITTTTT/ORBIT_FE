import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import assets from '@assets';
import '@splidejs/react-splide/css/skyblue';

type Props = {};

const HighView = (props: Props) => {
  const list = [
    {
      tag1: '자바스크립트',
      tag2: '자바',
      title: '프로젝트1',
      desc: '이 프로젝트는 영국에서 시작되어 서울까지 번진 그런 프로젝트로 기깔나고 미친 듯한 팀원과 함께 이 모험을 함께 떠날 사람을 구합니다.',
      maker: { name: '안녕토마스', roket: '10' },
      like: 4,
      view: 23,
    },
    {
      tag1: '자바스크립트',
      tag2: '자바',
      title: '프로젝트1',
      desc: '이 프로젝트는 영국에서 시작되어 서울까지 번진 그런 프로젝트로 기깔나고 미친 듯한 팀원과 함께 이 모험을 함께 떠날 사람을 구합니다.',
      maker: { name: '안녕토마스', roket: '10' },
      like: 4,
      view: 23,
    },
    {
      tag1: '자바스크립트',
      tag2: '자바',
      title: '프로젝트1',
      desc: '이 프로젝트는 영국에서 시작되어 서울까지 번진 그런 프로젝트로 기깔나고 미친 듯한 팀원과 함께 이 모험을 함께 떠날 사람을 구합니다.',
      maker: { name: '안녕토마스', roket: '10' },
      like: 4,
      view: 23,
    },
  ];

  return (
    <Container>
      <Head>
        <ProjectTitle>
          <div>주목받는 프로젝트</div>
          <p>개발자 사이에서 가장 인기있는 프로젝트에 참여해보세요.</p>
        </ProjectTitle>
        <div>더보기</div>
      </Head>
      <Splide
        aria-labelledby="My Favorite Images"
        options={{
          perPage: 3,
          height: '13rem',
          rewind: true,
          gap: '1rem',
        }}
      >
        {list.map((v, i) => (
          <SplideSlide>
            <ProjectBox>
              <ProjectTop>
                <p>
                  <span>프론트엔드</span>
                  <span>백엔드</span>
                </p>
                <p>하뚜</p>
              </ProjectTop>
              <ProjectMid>
                <div>{v.title}</div>
                <div>{v.desc}</div>
              </ProjectMid>
              <ProjectTag>
                <span>#{v.tag1}</span>
                <span>#{v.tag2}</span>
              </ProjectTag>
              <ProjectBottom>
                <p>
                  <span></span>
                  {v.maker.name}({v.maker.roket}KM)
                </p>
                <p>
                  <span>하트</span>
                  <span>{v.like}</span>
                  <span>눈</span>
                  <span>{v.view}</span>
                </p>
              </ProjectBottom>
            </ProjectBox>
          </SplideSlide>
        ))}

        {list.map((v, i) => (
          <SplideSlide>
            <ProjectBox>
              <ProjectTop>
                <p>
                  <span>프론트엔드</span>
                  <span>백엔드</span>
                </p>
                <p>하뚜</p>
              </ProjectTop>
              <ProjectMid>
                <div>{v.title}</div>
                <div>{v.desc}</div>
              </ProjectMid>
              <ProjectTag>
                <span>#{v.tag1}</span>
                <span>#{v.tag2}</span>
              </ProjectTag>
              <ProjectBottom>
                <p>
                  <span></span>
                  {v.maker.name}({v.maker.roket}KM)
                </p>
                <p>
                  <span>하트</span>
                  <span>{v.like}</span>
                  <span>눈</span>
                  <span>{v.view}</span>
                </p>
              </ProjectBottom>
            </ProjectBox>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default HighView;

const Container = styled.div`
  width: 100%;
  /* height: 300px; */
  /* background-color: #ffffff; */
  /* margin: 0 3% */
  width: 95%;
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

const ProjectBox = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 4%;
  gap: 15px;
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  p:nth-child(1) {
    gap: 5px;
    display: flex;
    span {
      color: blue;
      border: 1px solid blue;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

const ProjectMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div:nth-child(1) {
    font-size: 18px;
  }
  div:nth-child(2) {
    font-size: 14px;
  }
`;

const ProjectTag = styled.div`
  display: flex;
  font-size: 12px;
  gap: 5px;
`;

const ProjectBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  p:nth-child(2) {
    display: flex;
    gap: 5px;
  }
  p:nth-child(1) {
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      width: 20px;
      height: 20px;
      background-color: gray;
      border-radius: 10px;
    }
  }
`;
