import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import plus from '@assets/postProject/add_circle.svg';
import close from '@assets/postProject/close.svg';
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
      <HashTitleWrap>
        <h3>해시태그</h3>
        <span>최대 20개까지 태그가능</span>
      </HashTitleWrap>

      <Row>
        <HashtagInput
          type="text"
          onChange={HashtagOnchange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          placeholder="프로그램을 입력 해주세요"
        />
        <HashtagBtn onClick={AddHashtagList}>
          <img src={plus} alt="플러스아이콘" />
        </HashtagBtn>
      </Row>
      <HashtagList>
        {hashtagList?.map((hashtag: string, index: number) => {
          return (
            <Hashtag key={hashtag}>
              {hashtag}{' '}
              <button
                onClick={() => {
                  deleteHashtagList(index);
                }}
              >
                <img src={close} alt="닫기아이콘" />
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
  h3 {
    font-weight: 600;
    font-size: 19px;
  }
  span {
    font-size: 13px;
    line-height: 18px;
    color: #7e7e7e;
  }
`;

const HashTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 28px;
  margin-top: 56px;
`;
const Row = styled.div`
  display: flex;
  position: relative;
  width: 216px;
  margin-bottom: 12px;
`;
const HashtagInput = styled.input`
  padding: 9px 16px;
  background: #ffffff;
  border: 1.7px solid #e1e1e1;
  border-radius: 35px;
  font-weight: 500;
  font-size: 14px;
  outline: none;
`;
const HashtagBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
const HashtagList = styled.ul`
  display: flex;
  gap: 10px;
`;
const Hashtag = styled.li`
  background: #1560fb;
  border-radius: 35px;
  padding: 8px 16px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  button {
    margin-left: 8px;
  }
`;
