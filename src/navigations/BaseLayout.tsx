import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import PostProject from '@pages/PostProject';
import DetailProject from '@pages/DetailProject';
import Mypage from '@components/pages/Mypage';
import Layout from '@components/blocks/Layout';
import DirectUrl from '@pages/DirectUrl'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/postproject" element={<PostProject />} />
          <Route path="/project/:id" element={<DetailProject />} />
          <Route path='/redirecturl/:type' element={<DirectUrl/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseLayout;
