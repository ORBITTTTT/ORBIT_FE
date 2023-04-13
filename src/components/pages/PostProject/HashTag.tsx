import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';

const HashTag = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hashtagText, setHashtagText] = useState('');
  const [hashtagList, setHashtagList] = useState<string[]>([]);

  const HashtagOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashtagText(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      AddHashtagList();
    }
  };

  const AddHashtagList = () => {
    setHashtagList([...hashtagList, hashtagText]);
    const inputEl = inputRef.current;
    if (inputEl) {
      inputEl.value = '';
    }
  };

  const deleteHashtagList = (index: number) => {
    const newList = [...hashtagList];
    newList.splice(index, 1);
    setHashtagList(newList);
  };

  return (
    <HashtagContainer>
      <h3>해시태그</h3>
      <Row>
        <HashtagInput type="text" onChange={HashtagOnchange} onKeyDown={handleKeyDown} ref={inputRef} />
        <HashtagBtn onClick={AddHashtagList}>+</HashtagBtn>
      </Row>
      <HashtagList>
        {hashtagList?.map((hashtag: string, index: number) => {
          return (
            <Hashtag key={hashtag}>
              #{hashtag}{' '}
              <button
                onClick={() => {
                  deleteHashtagList(index);
                }}
              >
                x
              </button>
            </Hashtag>
          );
        })}
      </HashtagList>
    </HashtagContainer>
  );
};

export default HashTag;

const HashtagContainer = styled.div`
  margin-top: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
`;
const HashtagInput = styled.input`
  border: 1px solid #222;
  border-radius: 5px 0px 0px 5px;
  padding: 5px 10px;
  border-right: none;
`;
const HashtagBtn = styled.button`
  border: 1px solid #222;
  border-radius: 0px 5px 5px 0px;
  padding: 5px;
`;
const HashtagList = styled.ul`
  display: flex;
  gap: 10px;
`;
const Hashtag = styled.li`
  border: 1px solid #222;
  border-radius: 5px;
  padding: 5px 10px;
`;
