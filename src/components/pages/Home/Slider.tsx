import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import assets from '@assets';
import '@splidejs/react-splide/css/skyblue';
type Props = {};

const Slider = (props: Props) => {
  return (
    <Container>
      <Splide aria-labelledby="My Favorite Images">
        <SplideSlide>
          {/* <img src={assets.angry} alt="Image 1" /> */}
          <div style={{minHeight:225}}></div>
        </SplideSlide>
        <SplideSlide>
          <div></div>
          {/* <img src={assets.angry} alt="Image 2" /> */}
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 225px;
  background-color:  #ffffff;
`;
