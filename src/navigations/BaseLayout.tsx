import Home from '@pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
