import React, { useState } from 'react';
import Home from './Home';
import Slider from './Slider';
import HighView from './HighView';
import New from './New';
import HighLoved from './HighLoved';
import MainFind from './MainFind';
import styled from 'styled-components';
import assets from '@assets';
import LoginModal from '@components/blocks/LoginModal';

const Index = () => {
  return (
    <div>
      <Container>
        <Slider />
        <HighView />
        <RowView>
          <New />
          <HighLoved />
        </RowView>
        <Banner src="" />
        <MainFind />
        <footer>ALL RIGHT RESERVED ORBITY</footer>
      </Container>
    </div>
  );
};

export default Index;

const Container = styled.div`
  /* padding: 3% 5%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 0px;
  /* height: 100%; */
  background-color: #ffffff;
  @media screen and (max-width: 900px) {
    padding-top: 115px;
  }
  footer {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blanchedalmond;
    width: 100%;
    font-weight: 300;
  }
`;
const RowView = styled.div`
  display: flex;
  width: 95%;
  /* background-color: #ddd; */
  gap: 2%;
  margin-block: 40px;
`;

const Banner = styled.img`
  width: 95%;
  height: 200px;
  background-color: #ff8e72;
`;
