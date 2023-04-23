import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '@components/blocks/LoginModal';
import useOpenModal from '@hooks/modal';

type Props = {};

const Header = (props: Props) => {
  type Search = string;

  function useOpenModal() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const clickModal = () => {
      setIsOpenModal(true);
    };
    const closeModal = () => {
      setIsOpenModal(false);
    };
    return { isOpenModal, clickModal, closeModal };
  }
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const [search, setSearch] = useState<Search | null>(null);

  return (
    <Container>
      <div>
        <Link to="/">로고</Link>
        <p>
          <Link to="/postproject">새 프로젝트 생성</Link>
          {/* <span>알림</span> */}
          <span>
            <span onClick={clickModal}>로그인</span> / <span>회원가입</span>
          </span>
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
      {isOpenModal && <LoginModal closeModal={closeModal} />}
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
