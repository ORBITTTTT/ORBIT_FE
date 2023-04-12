import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import PostProject from '@pages/PostProject';

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproject" element={<PostProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
