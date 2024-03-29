import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

type Props = { closeModal?: () => void };

const EvaluationModal = ({ closeModal }: Props) => {
  const [page, setPage] = useState<number>(1);
  const test = [
    {
      userid: 12,
      userProfileImage: 'https://static.miraheze.org/bigforestwiki/d/de/%EC%A2%86%EB%A6%AC.png',
      userNickName: '김백엔',
      userApplyJob: 'FE',
      evaluation: true,
    },
    {
      userid: 11,
      userProfileImage:
        'https://img1.daumcdn.net/thumb/C176x176/?fname=https://blog.kakaocdn.net/dn/bzoMCC/btqC6Phzii0/g8plX6VuzqC05XWBlFGQwK/img.png',
      userNickName: '나는코딩이조아여',
      userApplyJob: 'BE',
      evaluation: false,
    },
    {
      userid: 11,
      userProfileImage:
        'https://i.namu.wiki/i/2CxTTURJ74h0iwxTeFMqRegi_ANKsyPFr5sfxq28gKC3ufjsrDpg-OYX-mw3X2jrwYGXAvSC18TW8RpiN9Mc2g.webp',
      userNickName: '뒤집어지는디자',
      userApplyJob: 'DE',
      evaluation: false,
    },
    {
      userid: 11,
      userProfileImage:
        'https://lh3.googleusercontent.com/-GN0y2FtsXQk/Wu_ahDaOOFI/AAAAAAACSA4/ow-azkhyjp0UU9GApwkxlhkVSuNKLWHrACHMYCw/s0/4f526dfec7af29ceccd0b6b0b1fb5ce5e95891c2.png',
      userNickName: 'IMMTMT',
      userApplyJob: 'PM',
      evaluation: false,
    },
  ];

  const JOB: {
    [key: string]: string;
  } = {
    FE: '프론트엔드',
    BE: '백엔드',
    DE: '디자이너',
    PM: '기획자',
  };

  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer>
        <Close onClick={closeModal}>
          <IoMdClose />
        </Close>

        <Main>
          <div>
            <span>음악컨텐츠 관련 프...</span>
            <span>프로젝트가 모두 마무리 되었습니다</span>
          </div>
          <div>프로젝트를 진행하면서 얻은 경험을 토대로 팀원들을 리뷰해주세요</div>
          <TeamList>
            {test.map((item, index) => (
              <div>
                <img src={item.userProfileImage} alt="" />
                <TeamMember job={item.userApplyJob}>
                  <div>{JOB[item.userApplyJob]}</div>
                  <div>{item.userNickName}</div>
                </TeamMember>
                {item.evaluation ? <div>평가완료</div> : <div>평가하기</div>}
              </div>
            ))}
          </TeamList>
        </Main>
      </ModalContainer>
    </ModalWrap>
  );
};

export default EvaluationModal;

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
  width: 1000px;
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
    padding: 3% 5%;
    border: 1px solid black;
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

const TeamList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
  img {
    width: 80px;
    height: 80px;
    background-color: 'gray';
    border-radius: 50%;
    border: 0.5px solid black;
  }
`;

const TeamMember = styled.div<{ job: string }>`
  ${(props) =>
    props.job === 'FE'
      ? `color: var(--front-end)`
      : props.job === 'BE'
      ? 'color: var(--back-end)'
      : props.job === 'DE'
      ? 'color: var(--design)'
      : 'color: var(--etc)'}
`;
