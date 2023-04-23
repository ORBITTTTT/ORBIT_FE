import React from 'react';
import styled from 'styled-components';

type Props = { closeModal?: () => void };

const LoginModal = ({ closeModal }: Props) => {
  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer>
        <Close onClick={closeModal}>
          <p></p>X
        </Close>
        <h2>간편 로그인</h2>
        <Main>
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
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 960px;
  width: 30%;
  text-align: center;
  font-size: 1em;
  background-color: white;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  p {
    padding: 3% 5%;
    border: 1px solid black;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 24px;
`;
