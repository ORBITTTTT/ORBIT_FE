import React, { useState } from 'react';
import EvaluationModal from '../EvaluationModal';
import useOpenModal from '@hooks/modal';
import { evaluate } from '@utils/Evaluate';
import styled from 'styled-components';

interface Props {}

const Index = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const [select, setSelect] = useState<{ [key: string]: any }>({});

  const mockData = [
    {
      evaluation: -2,
      title: '음악컨텐츠 관련 프로젝트 팀원 모집합니다.',
      teamMate: {
        fe: 2,
        de: 1,
        be: 1,
        pm: 1,
      },
      startDate: '2021-08-01',
      endDate: '2021-09-01',
      isEvaluated: false,
      feedback: [
        '팀원들이 너무 좋았어요',
        '형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?',
      ],
      selectList: [
        {
          sel_id: 1,
          count: 3,
        },
        {
          sel_id: 2,
          count: 2,
        },
        {
          sel_id: 3,
          count: 1,
        },
        {
          sel_id: 4,
          count: 0,
        },
      ],
    },
    {
      evaluation: +4,
      title: '음악컨텐츠 관련 프로젝트 팀원 모집합니다.',
      teamMate: {
        fe: 2,
        de: 1,
        be: 1,
        pm: 1,
      },
      startDate: '2021-08-01',
      endDate: '2021-09-01',
      isEvaluated: true,
      feedback: [
        '팀원들이 너무 좋았어요',
        '형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?형님 제맘 아시죠?',
      ],
      selectList: [
        {
          sel_id: 1,
          count: 3,
        },
        {
          sel_id: 2,
          count: 2,
        },
        {
          sel_id: 3,
          count: 1,
        },
        {
          sel_id: 4,
          count: 0,
        },
      ],
    },
  ];

  return (
    <div>
      <Title>평가된 프로젝트</Title>
      <Wrapper>
        {mockData.map((item, idx) => {
          return (
            <EvaluationCard key={idx}>
              <KM minus={item.evaluation}>{item.evaluation}KM</KM>
              <Title>{item.title}</Title>
              <Team>
                <div>
                  <span>프론트엔드</span> {item.teamMate.fe} 명
                </div>
                <div>
                  <span>백엔드</span> {item.teamMate.be} 명
                </div>
                <div>
                  <span>디자이너</span> {item.teamMate.de} 명
                </div>
                <div>
                  <span>PM</span> {item.teamMate.pm} 명
                </div>
              </Team>
              <Date>
                {item.startDate} - {item.endDate}
              </Date>
              <div
                style={{
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    marginBottom: '10px',
                  }}
                >
                  만족도 평가
                </div>
                <Select isEvaluated={item.isEvaluated}>
                  {item.selectList.map((data, idx) => {
                    return (
                      <div key={idx}>
                        <span>{data.count}</span> <span>{evaluate[data.sel_id].content}</span>
                      </div>
                    );
                  })}
                </Select>

                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    lineHeight: '20px',
                    marginBottom: '10px',
                    filter: item.isEvaluated ? 'blur(0px)' : 'blur(8px)',
                  }}
                >
                  팀원 후기
                </div>
                <FeedBack isEvaluated={item.isEvaluated}>
                  {item.feedback.map((item, idx) => {
                    return <div key={idx}>{item}</div>;
                  })}
                </FeedBack>
                {!item.isEvaluated && (
                  <Evalbtn>
                    팀원들의 후기를 보려면 후기를 입력해주세요!
                    <p
                      onClick={() => {
                        setSelect(item);
                        clickModal();
                      }}
                    >
                      후기 입력하러 가기
                    </p>
                  </Evalbtn>
                )}
              </div>
            </EvaluationCard>
          );
        })}
      </Wrapper>
      {isOpenModal && <EvaluationModal closeModal={closeModal} selectedData={select} />}
    </div>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const EvaluationCard = styled.div`
  width: 33%;
  max-width: 500px;
  margin-right: 1.5%;
`;

const KM = styled.div<{ minus: number }>`
  color: ${(props) => (props.minus > 0 ? 'var(--main)' : 'var(--tag-fail)')};
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: ${(props) => (props.minus > 0 ? '2px solid var(--main)' : '2px solid var(--tag-fail)')};
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 'bold';
  line-height: 28px;
  font-family: 'Pretendard-Bold';
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin: 13px 0;
  div {
    width: 40%;
    display: flex;
    align-items: center;
  }
  span {
    width: 80px;
  }
`;
const Date = styled.div`
  color: #a2a2a2;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
`;
const Select = styled.div<{ isEvaluated: boolean }>`
  text-overflow: ellipsis;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  filter: ${(props) => (props.isEvaluated ? 'blur(0px)' : 'blur(8px)')};

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  span: nth-child(1) {
    background-color: var(--main);
    color: white;
    padding: 2px 5px;
    font-size: 16px;
    font-weight: 400;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
  }
  span: nth-child(2) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
const FeedBack = styled.div<{ isEvaluated: boolean }>`
  /* opacity: ${(props) => (props.isEvaluated ? '1' : '0.1')}; */
  border: 1px solid rgba(217, 217, 217, 0.01);
  background: rgba(217, 217, 217, 0.01);
  filter: ${(props) => (props.isEvaluated ? 'blur(0px)' : 'blur(8px)')};
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 15px;
  div {
    line-height: 20px;
  }
`;

const Evalbtn = styled.span`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  gap: 10px;
  p {
    color: var(--main);
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
