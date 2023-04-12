import React from 'react';
import Home from './Home';
import Header from '@components/blocks/Header';
import Slider from './Slider';
import HighView from './HighView';
import New from './New';
import HighLoved from './HighLoved';
import MainFind from './MainFind';
import styled from 'styled-components';
import assets from '@assets';

const index = () => {
  return (
    <div>
      <Header />
      <Container>
        <Slider />
        <HighView />
        <RowView>
          <New />
          <HighLoved />
        </RowView>
        <Banner src={assets.angry} alt='유저 등급제 설명'/>
        <MainFind />
      </Container>
    </div>
  );
};

export default index;

const Container = styled.div`
padding: 3% 5%;
display: flex;
flex-direction: column;
gap: 20px;
`;
const RowView = styled.div`
  display: flex;
  width: 100%;
  background-color: aliceblue;
  gap: 2%;
`;

const Banner =styled.img`
   width: 100%;
   height: 200px;
   background-color: aquamarine;
`
