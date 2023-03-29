import React from 'react';
import assets from '@assets';
import Test from '@components/Test';

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={assets.angry} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Test />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default Main;
