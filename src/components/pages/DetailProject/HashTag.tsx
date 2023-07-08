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
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: var(--pointcolor, #1560fb);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.105px;
`;
