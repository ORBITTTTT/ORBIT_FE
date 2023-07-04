import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '@components/blocks/LoginModal';
import useOpenModal from '@hooks/modal';
import assets from '@assets';
import searchIcon from '@assets/search.svg';

const Header = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const [search, setSearch] = useState<string | null>(null);

  return (
    <HeaderContainer>
      <HeaderWrap>
        <LogoWrap>
          <Link to="/">
            <img src={assets.logo} alt="로고" />
          </Link>
          <LinkWrap>
            <Link to={'/info'}>오비티 소개</Link>
            <Link to={'/projectlist'}>프로젝트 목록</Link>
          </LinkWrap>
        </LogoWrap>
        <InputWrap>
          <label htmlFor="">
            <SearchInput
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button>
              <img src={searchIcon} alt="검색아이콘" />
            </button>
          </label>
          <SignInBtn onClick={clickModal}>로그인 | 회원가입</SignInBtn>
          <NewProjectBtn to="/postproject">새 프로젝트 생성</NewProjectBtn>
        </InputWrap>
      </HeaderWrap>
      {isOpenModal && <LoginModal closeModal={closeModal} active={false} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
  width: 100%;
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
`;
const HeaderWrap = styled.div`
  width: 90%;
  max-width: 1230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 30px;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const SearchInput = styled.input`
  border: 0;
  border-bottom: 1px solid #d9d9d9;
  width: 300px;
`;
const SignInBtn = styled.button`
  font-weight: 500;
  font-size: 14px;
  margin-right: 10px;
`;

const NewProjectBtn = styled(Link)`
  background: #1560fb;
  border-radius: 4px;
  padding: 12px 32px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;
