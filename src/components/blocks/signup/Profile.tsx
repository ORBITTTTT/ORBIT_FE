import assets from '@assets';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type Props = { page?: number; setData: Function; data: {}; setPage: Function };

const Profile = ({ data, setData, page, setPage }: Props) => {
  return (
    <Wrap>
      <Top>
        <div>프로필 등록</div>
        <p>올빗의 멤버로 활동 시 사용할 프로필 사진을 등록해 주세요!</p>
        <p>(선택하지 않을 시 기본 사진으로 등록됩니다.)</p>
      </Top>
      <Mid>
        <img src={assets.profile} />
        <input
          type="text"
          maxLength={20}
          placeholder="닉네임을 입력하세요 (20자이내)"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </Mid>
      <Bottom>
        <div onClick={() => setPage(2)}>계속하기</div>
        <span>{page}/4</span>
      </Bottom>
    </Wrap>
  );
};

export default Profile;

const Wrap = styled.div`
  height: 100%;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  input {
    border: none;
    border-bottom: 2px solid #d9d9d9;
    width: 70%;
    padding: 7px 10px;
    ::placeholder {
      text-align: center;
      padding: 5px;
      color: #a2a2a2;
    }
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
