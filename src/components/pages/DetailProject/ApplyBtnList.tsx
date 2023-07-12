import React from 'react';
import styled from 'styled-components';

const ApplyBtnList = () => {
  const positionList = [
    { title: '프론트엔드', applyNum: 0, recruitment: 1, complate: 1 },
    { title: '백엔드', applyNum: 1, recruitment: 1, complate: 2 },
    { title: '디자이너', applyNum: 0, recruitment: 1, complate: 1 },
    { title: 'PM', applyNum: 1, recruitment: 1, complate: 3 },
  ];
  return (
    <ApplyBtnListContainer>
      <ApplyBtnTttle>지원하기</ApplyBtnTttle>
      <ApplyBtnSubTitle>참여하고 싶은 포지션에 지원해보세요</ApplyBtnSubTitle>
      <ApplyBtnListWrap>
        {positionList.map((positon) => {
          return (
            <li>
              <ApplyBtn complate={positon.complate}>
                <p>{positon.title}</p>
                <p>
                  {positon.applyNum}
                  <span> / {positon.recruitment}</span>
                </p>
              </ApplyBtn>
            </li>
          );
        })}
      </ApplyBtnListWrap>
    </ApplyBtnListContainer>
  );
};

export default ApplyBtnList;

const ApplyBtnListContainer = styled.div`
  padding: 40px 345px;
  background: rgba(21, 96, 251, 0.05);
`;

const ApplyBtnTttle = styled.h3`
  color: var(--gray-1, #1e1e1e);
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
`;

const ApplyBtnSubTitle = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 300;
`;

const ApplyBtnListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  margin-top: 22px;
  li {
    flex: 1;
  }
`;

const ApplyBtn = styled.button<{ complate: number }>`
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.complate === 1 && '#fff'};
  background-color: ${(props) => props.complate === 2 && '#1560FB'};
  background-color: ${(props) => props.complate === 3 && 'var(--gray-5, #E1E1E1)'};
  color: ${(props) => props.complate === 1 && '#000'};
  color: ${(props) => props.complate === 2 && '#fff'};
  color: ${(props) => props.complate === 3 && 'var(--gray-4, #A2A2A2)'};
  box-shadow: 0px 2px 6px 0px rgba(138, 149, 158, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  span {
    color: ${(props) => props.complate === 1 && 'var(--gray-4, #A2A2A2)'};
    color: ${(props) => props.complate === 2 && '#fff'};
    color: ${(props) => props.complate === 3 && 'var(--gray-4, #A2A2A2)'};
  }
`;
