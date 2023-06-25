import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { getCookie } from '@utils/Cookie';
import { restApi } from '@apis/index';

const Index = () => {
  const url = 'https://cdn.newsquest.co.kr/news/thumbnail/202205/96478_80014_5020_v150.jpg';
  const list = [{ name: 'GITHUB', linkname: 'www.github.com' }];
  const interest = ['Java', 'Java Script', 'Figma', 'Sketch', 'Spring'];
  const fileInputRef = useRef<any>(null);
  const [data, setData] = useState({});
  interface Data {
    profile_img?: string;
    name?: string;
    job?: string;
    interest?: string[];
    introduce?: string;
    link?: {
      name?: string | null | undefined;
      linkname?: string | null | undefined;
    }[];
  }
  type SaveImg = {
    e: React.ChangeEvent<HTMLInputElement>;
    fileInputRef: any;
    setData: Dispatch<SetStateAction<Data>>;
    data: {};
  };
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
  return (
    <ProfileWrap>
      <ProfileImgWrap>
        <Img style={{ backgroundImage: `url(${url})` }}>
          <div onClick={() => fileInputRef.current.click()}>
            <BiPencil color="white" />
          </div>
          <input
            name="imgUpload"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            ref={fileInputRef}
            onChange={(e) => saveFileImage({ e, fileInputRef, setData, data })}
            style={{ display: 'none' }}
          />
        </Img>
        <Job>프론트엔드</Job>
      </ProfileImgWrap>
      <ProfileExplainWrap>
        <Modi>수정</Modi>
        <Profile>
          안녕하세요 저는 뭘 하고있는 나이름입니다. 성실하고 행복합니다 감사합니다.
          <br />
          <br /> 좋아하는 구절은 이상은 같은 뭇 능히 귀는 예수는 것이 약동하다. 산야에 얼마나 그것은 투명하되
          황금시대다. 만천하의 있는 트고, 것이다.
          <br /> 실로 그들의 우리 그들은 전인 하는 보내는 속에서 청춘이다 <br />
          <br />
          같이 사이드 프로젝트 해요!
        </Profile>
        <div>링크</div>
        <ProfileLink>
          {list?.map((v, i) => (
            <LinkList key={i}>
              <div>
                <AiOutlineLink />
              </div>
              <div>{v.name}</div>
              <p></p>
              <div>{v.linkname}</div>
            </LinkList>
          ))}
        </ProfileLink>
        <div>관심 기술</div>
        <ProfileInterest>
          {interest.map((v, i) => (
            <p>{v}</p>
          ))}
        </ProfileInterest>
      </ProfileExplainWrap>
    </ProfileWrap>
  );
};

export default Index;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  /* background-color: aliceblue; */
`;
const ProfileImgWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* background-color: aliceblue; */
`;
const Img = styled.div`
  width: 160px;
  aspect-ratio: 1;
  background-color: aliceblue;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  margin-bottom: 30px;
  div {
    position: absolute;
    background-color: #1560fb;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
`;
const Job = styled.div`
  color: #6494f9;
  border: 1px solid #6494f9;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
`;
const ProfileExplainWrap = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;
const ProfileLink = styled.div``;
const Profile = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;
const ProfileInterest = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    color: white;
    background-color: #1560fb;
    padding: 5px 10px;
    border-radius: 30px;
    font-weight: 200;
    font-size: 14px;
  }
`;
const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  /* margin-top: 20px; */
  margin-bottom: 10px;
  div:nth-child(2) {
    width: 20%;
    padding: 4px;
    display: flex;
    font-size: 16px;
    color: #3e3e3e;
    justify-content: flex-start;
  }
  div:nth-child(4) {
    font-size: 16px;
    width: 65%;
    justify-content: flex-start;
    display: flex;
    color: #3e3e3e;
    padding: 4px;
    border: none;
  }
  div:nth-child(1) {
    color: white;
    background-color: #1e1e1e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }
  p {
    height: 24px;
    color: #a2a2a2;
    border-left: 0.5px solid;
  }
`;

const Modi = styled.div`
  position: absolute;
  right: 0;
  top: -20px;
  cursor: pointer;
  font-size: 13px;
`;
