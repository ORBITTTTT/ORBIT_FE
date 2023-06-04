import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '@components/blocks/LoginModal';
import useOpenModal from '@hooks/modal';
import assets from '@assets';

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
    <div>
      <Container>
        <div>
          <Link to="/">
            <img src={assets.logo} style={{ width: 100 }} />
          </Link>
          <p>
            <span>오비티 소개</span>
            <span>프로젝트 목록</span>
          </p>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <p>
            {/* <span>알림</span> */}
            <span onClick={clickModal}>
              <span style={{ fontSize: 14 }}>로그인 | 회원가입</span>
            </span>{' '}
            <Link
              to="/postproject"
              style={{
                color: 'white',
                backgroundColor: '#1560FB',
                padding: '10px 30px',
                fontSize: 14,
                borderRadius: 5,
              }}
            >
              새 프로젝트 생성
            </Link>
          </p>
        </div>
      </Container>
      {isOpenModal && <LoginModal closeModal={closeModal} active={false} />}
    </div>
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
  justify-content: space-between;
  height: 80px;
  /* gap: 50px; */
  padding: 20px 80px;
  div {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    gap: 50px;
    /* background-color: #a17979; */
    /* justify-content: space-between; */
    @media screen and (max-width: 900px) {
      gap: 20px;
    }
    input {
      border: none;
      border-bottom: 1px solid #d9d9d9;
      width: 200;
    }
    p {
      display: flex;
      gap: 50px;

      font-weight: 500;
      align-items: center;
      span {
        cursor: pointer;
      }
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
`;
