import { type } from 'os';
import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {};

const Header = (props: Props) => {
  type Search = string;

  const [search, setSearch] = useState<Search | null>(null);

  return (
    <Container>
      <div>
        <h1>로고</h1>
        <p>
          <span>새 프로젝트 생성</span>
          <span>알림</span>
          <span>로그인 / 회원가입</span>
        </p>
      </div>
      <div>
        <p>
          <span>오비티 소개</span>
          <span>프로젝트 목록</span>
        </p>
        <input
          type={'text'}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  /* width: 100%; */
  background-color: green;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1% 3%;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      gap: 10px;
    }
  }
`;
