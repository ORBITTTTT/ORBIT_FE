import React from 'react';
import styled from 'styled-components';

import PostProject from './PostInfo';
import Editor from './Editor';
import HashTag from './HashTag';

const index = () => {
  return (
    <PostProjectContainer>
      <PostProject />
      <Editor />
      <HashTag />
      <AddProjectBtn>프로젝트 등록</AddProjectBtn>
    </PostProjectContainer>
  );
};

export default index;
const PostProjectContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 0;
  text-align: right;
`;
const AddProjectBtn = styled.button`
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 5px;
`;
