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
          <div style={{ minHeight: 354 }}>
            <img src={assets.banner01} alt="Image 1" 
            // style={{width:'100%'}} 
            />
          </div>
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
  height: 354px;
  background-color: #818080;
`;
