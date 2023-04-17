import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileContainer>
      <ImgWrap>
        <ProfileImg src="https://avatars.githubusercontent.com/u/88040809?v=4" alt="작성자프로필사진" />
      </ImgWrap>
      <p>🚀200m 남은 안녕토마스</p>
      <p>
        제품과 시장을 이해하고, 같이 일하는 동료를 이해하며, 사용하는 기술을 이해하고자 꾸준히 노력하는 개발자,
        손유정입니다.
      </p>
      <ul>
        <li>
          <h3>Github</h3>
          <a href="https://github.com/YoujungSon">https://github.com/YoujungSon</a>
        </li>
      </ul>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  p {
    margin-bottom: 10px;
  }
`;
const ImgWrap = styled.div`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.1);
  margin-bottom: 20px;
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
