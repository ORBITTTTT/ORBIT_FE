import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import SelectEvaluation from './SelectEvaluation';
import { OutlinedInput, InputAdornment, Button } from '@mui/material';
import apis, { restApi } from '@apis/index';

type Props = { closeModal?: () => void; selectedData: { [key: string]: any } };

interface Select {
  userid: number;
  userProfileImage: string;
  userNickName: string;
  userApplyJob: string;
  evaluation: boolean;
}

const EvaluationModal = ({ closeModal, selectedData }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [select, setSelect] = useState<{ [key: string]: any }>({});
  const [data, setData] = useState<{ [key: string]: any }>({});

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

  const selectOne = (item: Select) => {
    setSelect(item);
    setPage(1);
  };

  const sendEvaluation = () => {
    restApi
      .post('/evaluation', {
        projectid: selectedData.projectid,
        userid: select.userid,
        evaluation: data,
      })
      .then((res) => {
        closeModal && closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ModalContainer page={page}>
        <Close onClick={closeModal}>
          <IoMdClose />
        </Close>

        {page === 0 ? (
          <Main>
            <div>
              <span>음악컨텐츠 관련 프...</span>
              <span>프로젝트가 모두 마무리 되었습니다</span>
            </div>
            <div>프로젝트를 진행하면서 얻은 경험을 토대로 팀원들을 리뷰해주세요</div>
            <TeamList>
              {test.map((item, index) => (
                <div>
                  <div style={{ position: 'relative' }} onClick={() => selectOne(item)}>
                    <img src={item.userProfileImage} alt="" />
                    {item.evaluation ? (
                      <AiFillCheckCircle
                        color={'var(--main)'}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 10,
                          fontSize: 25,
                          backgroundColor: 'white',
                          borderRadius: '50%',
                        }}
                      />
                    ) : null}
                  </div>
                  <TeamMember job={item.userApplyJob}>
                    <div>{JOB[item.userApplyJob]}</div>
                  </TeamMember>
                  <div style={{ fontSize: 14 }}>{item.userNickName}</div>
                </div>
              ))}
            </TeamList>
          </Main>
        ) : page === 1 ? (
          <Main>
            <TeamList2 style={{ position: 'absolute', top: -40, left: 0 }}>
              <div>
                <img src={select?.userProfileImage} alt="" />
                <TeamMember job={select?.userApplyJob}>
                  <div style={{ fontSize: 13 }}>{JOB[select?.userApplyJob]}</div>
                </TeamMember>
                <div style={{ fontSize: 16 }}>{select?.userNickName}</div>
              </div>
            </TeamList2>
            <div style={{ fontSize: 13, marginTop: 40 }}>팀원에게 해당되는 문구를 모두 선택해주세요.</div>
            <SelectEvaluation data={data} setData={setData} setPage={setPage} />
          </Main>
        ) : (
          <Main>
            <div>
              김백엔(프론트엔드)님에 대한 코멘트를 한마디로 남겨주세요!(필수)
              <span style={{ color: 'gray' }}>지나친 비방은 자제해주세요!</span>
            </div>

            <OutlinedInput
              type="text"
              sx={{ width: '80%', border: '1px solid var(--main)', borderRadius: '10px', marginTop: '20px' }}
              endAdornment={
                <InputAdornment position="end" color="#ccc">
                  50자 제한
                </InputAdornment>
              }
              inputProps={{
                maxLength: 50,
              }}
              onChange={(e) => {
                setData((prev) => {
                  return { ...prev, comment: e.target.value };
                });
              }}
            />
            <Btn onClick={closeModal}>완료하기</Btn>
          </Main>
        )}
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

const ModalContainer = styled.div<{ page: number }>`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 88;
  transform: translate(-50%, -50%);
  max-width: 960px;
  width: 1000px;
  ${(props) => (props.page === 0 || props.page === 2 ? `height: 520px;` : `height: 660px;`)}
  justify-content: center;
  text-align: center;
  font-size: 1em;
  background-color: white;
  padding: 0px 4%;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  z-index: 5;
  p {
    padding: 3% 5%;
    /* border: 1px solid black; */
  }
`;

const Close = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  z-index: 25;
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
    position: relative;
    width: 80px;
    height: 80px;
    background-color: 'gray';
    border-radius: 50%;
    border: 0.5px solid #ccc;
    background-color: white;
  }
`;

const TeamList2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;

  img {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: 'gray';
    border-radius: 50%;
    border: 0.5px solid #ccc;
    background-color: white;
  }
`;

const TeamMember = styled.div<{ job: string }>`
  font-size: 11px;
  margin-block: 5px;
  font-weight: bold;
  ${(props) =>
    props.job === 'FE'
      ? `color: var(--front-end)`
      : props.job === 'BE'
      ? 'color: var(--back-end)'
      : props.job === 'DE'
      ? 'color: var(--design)'
      : 'color: var(--etc)'}
`;

const Btn = styled.div`
  padding: 5px 32px;
  background-color: var(--main);
  color: white;
  border-radius: 5px;
  font-size: 14px;
  line-height: 22px;
  margin-top: 10px;
  cursor: pointer;
`;
