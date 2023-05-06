import React from 'react';
import styled from 'styled-components';
import assets from '@assets';

type Props = { page?: number; setData: Function; data: {}; setPage: Function };

const Job = ({ data, setData, page, setPage }: Props) => {
  return (
    <Wrap>
      <Top>
        <div>직군</div>
        <p>나의 직군을 선택해주세요</p>
      </Top>
      <Mid>
        <div
          onClick={() => {
            setData({ ...data, job: 'FE' });
          }}
        >
          프론트엔드
        </div>
        <div
          onClick={() => {
            setData({ ...data, job: 'BE' });
          }}
        >
          백엔드
        </div>
        <div
          onClick={() => {
            setData({ ...data, job: 'DE' });
          }}
        >
          디자이너
        </div>
        <div
          onClick={() => {
            setData({ ...data, job: 'PM' });
          }}
        >
          PM
        </div>
      </Mid>
      <Bottom>
        <div onClick={() => setPage(3)}>계속하기</div>
        <span>{page}/4</span>
      </Bottom>
    </Wrap>
  );
};

export default Job;
const Wrap = styled.div`
  height: 100%;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Top = styled.div`
  height: 25%;
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  div {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
  }
`;
const Mid = styled.div`
  height: 55%;

  /* background-color: antiquewhite; */
  display: flex;
  width: 256px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4%;
  div {
    width: 120px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #86755d;
    border-radius: 10px;
    color: white;
  }
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  gap: 20px;
  /* background-color: antiquewhite; */
  div {
    background-color: #526cfe;
    width: 30%;
    color: white;
    padding: 3%;
    font-size: 14px;
    font-weight: 300;
    border-radius: 10px;
  }
  span {
    font-size: 11px;
    color: #a2a2a2;
  }
`;
