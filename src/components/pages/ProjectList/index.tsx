import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {};

const Index = (props: Props) => {
  const [value, setValue] = useState<number>(0);
  const tabs = ['전체', '프론트엔드', '백엔드', '디자이너', 'PM'];

  return (
    <Wrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            onClick={() => {
              setValue(index);
            }}
            index={index}
            value={value}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 10%;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;

const Tab = styled.div<{ index: number; value: number }>`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  color: ${(props) => (props.index === props.value ? 'var(--main)' : '#A2A2A2')};
  cursor: pointer;
`;
