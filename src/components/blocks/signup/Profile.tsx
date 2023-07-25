import { restApi } from '@apis/index';
import assets from '@assets';
import { getCookie } from '@utils/Cookie';
import { type } from 'os';
import React, { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';
import { AuthState } from 'src/@types/auth';

type SaveImg = {
  e: React.ChangeEvent<HTMLInputElement>;
  fileInputRef: any;
  setData: Dispatch<SetStateAction<AuthState>>;
  data: {};
};

type Props = { page?: number; setData: Dispatch<SetStateAction<AuthState>>; data: AuthState; setPage: Function };

const Profile = ({ data, setData, page, setPage }: Props) => {
  const fileInputRef = useRef<any>(null);

  //* 이미지 저장
  const saveFileImage = async ({ e, fileInputRef, setData, data }: SaveImg) => {
    e.preventDefault();
    const formdata = new FormData();
    console.log(fileInputRef?.current.files[0].size);
    if (fileInputRef?.current.files[0].size > 5000000) {
      return;
    }
    formdata.append('filedata', fileInputRef?.current.files[0]);
    formdata.append('service', 'profile');

    const access_token = getCookie('access_token');
    await restApi
      .post('/files', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  };

  //* 닉네임 중복 체크
  const checkNickname = async () => {
    await restApi
      .post(`/users/profile/nickCheck?nickName=${data.userNickname}`)
      .then((res) => {
        setPage(2);
      })
      .catch((err) => {
       // alert('닉네임 중복');
      });
  }

  return (
    <Wrap>
      <Top>
        <div>프로필 등록</div>
        <p>올빗의 멤버로 활동 시 사용할 프로필 사진을 등록해 주세요!</p>
        <p>(선택하지 않을 시 기본 사진으로 등록됩니다.)</p>
      </Top>
      <Mid>
        <ImgWrap>
          <img src={assets.profile} />
          <Pencil onClick={() => fileInputRef.current.click()}>
            <BsPencil color="white" />
          </Pencil>
        </ImgWrap>
        <input
          type="text"
          maxLength={20}
          placeholder="닉네임을 입력하세요 (20자이내)"
          onChange={(e) => setData({ ...data, userNickname: e.target.value })}
        />
        <input
          name="imgUpload"
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          ref={fileInputRef}
          onChange={(e) => saveFileImage({ e, fileInputRef, setData, data })}
          style={{ display: 'none' }}
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
const ImgWrap = styled.div`
  /* background-color: aliceblue; */
  gap: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Pencil = styled.div`
  background-color: #1560fb;
  padding: 8px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  position: absolute;
  top: 63%;
  left: 60%;
  cursor: pointer;
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
    background-color: #1560fb;
    width: 30%;
    color: white;
    padding: 3%;
    font-size: 14px;
    font-weight: 300;
    border-radius: 10px;
    cursor: pointer;
  }
  span {
    font-size: 11px;
    color: #a2a2a2;
  }
`;
