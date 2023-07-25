import axios from 'axios';

import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

type Props = {};

const Index = (props: Props) => {
  //소셜 로그인시 리다이렉트 페이지

  const { type } = useParams();
  const searchParams = new URLSearchParams(document.location.search);
  console.log(type, searchParams.get('code'));

  useEffect(() => {
    if (searchParams.get('code')) {
      //코드가 있을때 서버로 코드와 타입을 보내서 토큰을 받아옴
      axios
        .post('/', {
          code: searchParams.get('code'),
          type: type,
        })
        .then((res) => {
          //성공시 쿠키에 토큰 저장
          //메인페이지로 이동
        })
        .catch((err) => {
          //실패시 에러메시지 출력
        });
    } else {
      //코드가 없을때 로그인 페이지로 이동 + 에러메시지 출력

      console.error('로그인 실패');
    }
  }, [searchParams.get('code')]);

  return <div>로그인 처리중</div>;
};

export default Index;
