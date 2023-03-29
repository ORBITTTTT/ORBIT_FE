import Main from '@pages/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
