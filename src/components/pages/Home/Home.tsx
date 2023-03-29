import React from 'react';
import assets from '@assets';
import Button from '@atoms/Button';
import Clock from '@blocks/Clock';

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <header>
          <img src={assets.angry} alt="logo" />
          <div>atoms</div>
          <Button />
          <div>blocks</div>
          <Clock />
        </header>
      </div>
    </div>
  );
};

export default Home;
