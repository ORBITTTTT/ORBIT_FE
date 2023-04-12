import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};

const Header = (props: Props) => {
  type Search = string;

  const [search, setSearch] = useState<Search | null>(null);

  return (
    <Container>
      <div>
        <Link to="/">로고</Link>
        <p>
          <Link to="/postproject">새 프로젝트 생성</Link>
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
          type="text"
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
  background-color: #fff;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
  border: 1px solid #000;
  width: 100%;
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
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
