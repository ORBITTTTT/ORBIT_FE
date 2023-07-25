import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './signup/Profile';
import Job from './signup/Job';
import Interest from './signup/Interest';
import { IoMdClose } from 'react-icons/io';
import Introduce from './signup/Introduce';
import { AuthState } from 'src/@types/auth';

type Props = { closeModal?: () => void; active: boolean };


const LoginModal = ({ closeModal, active }: Props) => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<AuthState>({ userNickname: '', userPositions: '', userInterestStacks: [] });
  console.log(data);
  useEffect(() => {
    if (page >= 5) {
      closeModal && closeModal();
    }
  }, [page]);

  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer>
        <Close onClick={closeModal}>
          <IoMdClose />
        </Close>
        {active && (
          <Main>
            <h3>간편 로그인</h3>
            <p>
              <strong>카카오톡</strong> 계정으로 시작하기
            </p>
            <p>
              <strong>Github</strong> 계정으로 시작하기
            </p>
            <p>
              <strong>Gmail</strong> 계정으로 시작하기
            </p>
          </Main>
        )}
        {!active && page === 1 && <Profile data={data} setData={setData} setPage={setPage} page={page} />}
        {!active && page === 2 && <Job data={data} setData={setData} setPage={setPage} page={page} />}
        {!active && page === 3 && <Interest data={data} setData={setData} setPage={setPage} page={page} />}
        {!active && page === 4 && <Introduce data={data} setData={setData} setPage={setPage} page={page} />}
      </ModalContainer>
    </ModalWrap>
  );
};

export default LoginModal;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 88;
  transform: translate(-50%, -50%);
  max-width: 960px;
  width: 480px;
  height: 630px;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  background-color: white;
  padding: 5%;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  z-index: 5;
  p {
    height: 45px;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Close = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  z-index: 5;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
