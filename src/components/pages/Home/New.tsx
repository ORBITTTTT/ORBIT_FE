import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import assets from '@assets';
import '@splidejs/react-splide/css/skyblue';

type Props = {};

const New = (props: Props) => {
  return (
    <Container>
      <Head>
        <div>
          <p>최근 생성된 프로젝트</p>
          <p>실시간으로 등록되는 새로운 프로젝트에 참여 해보세요.</p>
        </div>
        <div>
          <p>더보기</p>
          <p>새로고침</p>
        </div>
      </Head>
      <Splide
        aria-labelledby="My Favorite Images"
        options={{
          height: '10rem',
          rewind: true,
          gap: '1rem',
        }}
      >
        <SplideSlide>
          <img src={assets.angry} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={assets.angry} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default New;

const Container = styled.div`
  width: 60%;
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
