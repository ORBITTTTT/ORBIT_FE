import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import PostProject from '@pages/PostProject';
import DetailProject from '@pages/DetailProject';
import Header from '@components/blocks/Header';

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postproject" element={<PostProject />} />
        <Route path="/project/:id" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
