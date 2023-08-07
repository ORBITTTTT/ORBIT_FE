import React, { useState } from 'react';
import EvaluationModal from '../EvaluationModal';
import useOpenModal from '@hooks/modal';
import { evaluate } from '@utils/Evaluate';
import styled from 'styled-components';

interface Props {}

const Index = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();

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
  ];

  return (
    <div>
      <button onClick={clickModal}>열려라 버튼</button>
      <div>평가된 프로젝트</div>
      <div>
        {mockData.map((item, idx) => {
          return (
            <EvaluationCard key={idx}>
              <KM minus={item.evaluation}>{item.evaluation}KM</KM>
              <Title>{item.title}</Title>
              <Team>
                <div>프론트엔드 {item.teamMate.fe} 명</div>
                <div>백엔드 {item.teamMate.be} 명</div>
                <div>디자이너 {item.teamMate.de} 명</div>
                <div>PM {item.teamMate.pm} 명</div>
              </Team>
              <Date>
                {item.startDate} - {item.endDate}
              </Date>
              <Select>
                {item.selectList.map((data, idx) => {
                  return (
                    <div key={idx}>
                      {data.count} : {evaluate[data.sel_id].content}
                    </div>
                  );
                })}
              </Select>
              <div>{item.isEvaluated ? '평가완료' : '평가안됨'}</div>
              <FeedBack isEvaluated={item.isEvaluated}>
                {item.feedback.map((item, idx) => {
                  return <div key={idx}>{item}</div>;
                })}
              </FeedBack>
            </EvaluationCard>
          );
        })}
      </div>
      {isOpenModal && <EvaluationModal closeModal={closeModal} />}
    </div>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const EvaluationCard = styled.div`
  width: 33%;
  max-width: 500px;
`;

const KM = styled.div<{ minus: number }>`
  color: ${(props) => (props.minus > 0 ? 'var(--main)' : 'var(--tag-fail)')};
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: ${(props) => (props.minus > 0 ? '1px solid var(--main)' : '1px solid var(--tag-fail)')};
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  div {
    width: 40%;
  }
`;
const Date = styled.div``;
const Select = styled.div``;
const FeedBack = styled.div<{isEvaluated : boolean}>`
opacity: ${(props) => (props.isEvaluated ? '1' : '0.1')};
`;
