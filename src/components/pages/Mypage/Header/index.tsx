import React from 'react';
import styled from 'styled-components';
import { BsFillCircleFill, BsFillRocketFill } from 'react-icons/bs';
import { IoMdPlanet } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

type Props = {};

const index = (props: Props) => {
  return (
    <Wrap>
      <Profile>
        <p>안녕토마스</p>
        <span>님 반가워요</span>
      </Profile>
      <BoxWrap>
        <Count>
          <div>진행중인 프로젝트</div>
          <div>2 개</div>
        </Count>
        <Count>
          <div>완료된 프로젝트</div>
          <div>8 개</div>
        </Count>
        <Rocket>
          <RocketTitle>
            <div>
              잔디행성까지 <span>100m</span>
            </div>
            <AiOutlineQuestionCircle color='#1560FB'/>
          </RocketTitle>
          <p>행성간의 거리는 완료된 프로젝트 평점을 기반으로 산출됩니다.</p>
          <RocketBar>
            <IoMdPlanet style={{ position: 'absolute', color: '#A27E5F', left: -10 }} size={30} />
            <BsFillCircleFill style={{ position: 'absolute', color: '#00C382', left: '50%' }} size={20} />
            <BsFillRocketFill style={{ position: 'absolute', color: '#5b6461', left: '70%' }} size={30} />
            <IoMdPlanet style={{ position: 'absolute', color: '#00C382', right: -10 }} size={30} />
            <p>;</p>
          </RocketBar>
        </Rocket>
      </BoxWrap>
    </Wrap>
  );
};

export default index;

const Wrap = styled.div`
  height: 404px;
  width: 100%;
  background-color: #1560fb;
  display: flex;
  background: linear-gradient(183deg, rgba(21, 96, 251, 0.74) 0%, rgba(0, 195, 130, 0.58) 100%);
  /* justify-content: center; */
  /* margin-top: 80px; */
  padding-top: 80px;
  align-items: baseline;
`;

const Profile = styled.div`
  color: white;
  width: 200px;
  display: flex;
  gap: 10px;
  align-items: end;
  flex-direction: row;
  width: 100%;
  padding-left: 100px;
  margin-top: 110px;
  p {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }
  span {
    color: white;
    font-size: 20px;
  }
`;

const BoxWrap = styled.div`
  position: absolute;
  height: 182px;
  width: 100%;
  padding: 0 120px;
  /* background-color: white; */
  top: 243px;
  display: flex;
  gap: 46px;
`;

const Count = styled.div`
  width: 152px;
  height: 182px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(138, 149, 158, 0.3);

  div:nth-child(1) {
    width: 100%;
    background-color: #1254dc;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
    font-size: 14px;
    font-weight: 400;
  }
  div:nth-child(2) {
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;
const Rocket = styled.div`
  width: 834px;
  height: 182px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(138, 149, 158, 0.3);
  padding: 20px;
  p {
    font-size: 12px;
    font-weight: 300;
  }
`;

const RocketBar = styled.div`
  width: 90%;
  /* background-color: red; */
  margin: auto;
  position: relative;
  background: linear-gradient(to left, #0ec19b, #1560fb);
  margin-top: 50px;
  display: flex;
  align-items: center;
  height: 10px;
  /* background-color: #1560fb; */
`;

const RocketTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  span {
    color: blue;
  }
`;
