import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import assets from '@assets';
import '@splidejs/react-splide/css/skyblue';

type Props = {};

const New = (props: Props) => {
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
  ];

  return (
    <Container>
      <Head>
        <ProjectTitle>
          <div>최근 생성된 프로젝트</div>
          <p>실시간으로 등록되는 새로운 프로젝트에 참여 해보세요.</p>
        </ProjectTitle>
        <div>
          <p>더보기</p>
          <p>새로고침</p>
        </div>
      </Head>
      <ProjectOuter>
        {list.map((v, i) => (
          <ProjectBox key={i}>
            <ProjectMain>
              <ProjectTop>
                <p>
                  <span>프론트엔드</span>
                  <span>백엔드</span>
                </p>
                <p></p>
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
            </ProjectMain>
            <ProjectMaker>
              <p>프론트앤드</p>
              <img src="" alt="" />
              <p>잔디 행성까지 100KM 남은</p>
              <div>누구여</div>
              <p>안녕하세요 저는 뭘 하고있는 나이름입니다. 성실하고 행복합니다 감사합니다.</p>
            </ProjectMaker>
          </ProjectBox>
        ))}
      </ProjectOuter>
    </Container>
  );
};

export default New;

const Container = styled.div`
  width: 60%;
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

const ProjectOuter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80%;
`;

const ProjectBox = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid #e1e1e1;
  height: 100%;
  /* background-color: #e1e1e1; */
  align-items: center;
`;

const ProjectMain = styled.div`
  height: 90%;
  padding: 2%;
  /* background-color: aliceblue; */
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  height: 10%;
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
  height: 70%;
  gap: 10px;
  justify-content: center;
  div:nth-child(1) {
    font-size: 19px;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const ProjectTag = styled.div`
  display: flex;
  font-size: 12px;
  gap: 5px;
  height: 8%;
`;

const ProjectBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  height: 10%;
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

const ProjectMaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid gray;
  font-size: 13px;
  gap: 10px;
  padding: 2%;
  height: 90%;
  img {
    width: 74px;
    height: 74px;
    background-color: aliceblue;
    border-radius: 50%;
  }
  div {
    font-size: 19px;
    font-weight: bold;
  }
  p:nth-child(1) {
    color: blue;
    border: 1px solid blue;
    padding: 5px;
    border-radius: 5px;
    font-size: 11px;
  }
  p:nth-child(3) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  p:nth-child(5) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;
