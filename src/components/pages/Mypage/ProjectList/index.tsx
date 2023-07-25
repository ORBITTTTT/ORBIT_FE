import React from 'react';
import BookmarkProject from './BookmarkProject';
import WaitingProject from './WaitingProject';
import styled from 'styled-components';
import JoinProject from './JoinProject';
import FinishProject from './FinishProject';

const index = () => {
  return (
    <div>
      <BookmarkProject />
      <Row>
        <WaitingProject />
        <JoinProject />
      </Row>
      <FinishProject />
    </div>
  );
};

export default index;
const Row = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;
