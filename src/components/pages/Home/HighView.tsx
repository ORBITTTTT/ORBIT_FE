import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import assets from '@assets';
import '@splidejs/react-splide/css/skyblue';

type Props = { };

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
        <div>
          <div>주목받는 프로젝트</div>
          <p>개발자 사이에서 가장 인기있는 프로젝트에 참여해보세요.</p>
        </div>
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
            <div>
              <div>{v.title}</div>
              <div>{v.desc}</div>
              <div>
                <span>{v.tag1}</span>
                <span>{v.tag2}</span>
              </div>
              <div>
                <span>
                  {v.maker.name}({v.maker.roket}KM)
                </span>
                <span>{v.like}</span>
                <span>{v.view}</span>
              </div>
            </div>
          </SplideSlide>
        ))}

        <SplideSlide>
          <img src={assets.angry} alt="Image 1" style={{ width: 200 }} />
        </SplideSlide>
        <SplideSlide>
          <img src={assets.angry} alt="Image 2" style={{ width: 200 }} />
        </SplideSlide>
        <SplideSlide>
          <img src={assets.angry} alt="Image 2" style={{ width: 200 }} />
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default HighView;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: aquamarine;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  div {
    text-align: left;
  }
`;
