import React from 'react';
import styled from 'styled-components';

const HashTag = () => {
  const hashTagList = ['Spring', 'React'];
  return (
    <HashTagList>
      {hashTagList.map((hashtag: string) => {
        return <Hashtag key={hashtag}>#{hashtag}</Hashtag>;
      })}
    </HashTagList>
  );
};

export default HashTag;
const HashTagList = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;
const Hashtag = styled.li`
  border: 1px solid #222;
  border-radius: 5px;
  padding: 5px 10px;
`;
