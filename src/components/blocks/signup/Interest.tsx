import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import assets from '@assets';
interface Data {
  userProfileImage?: string;
  name?: string;
  userPositions?: string;
  userInterestStacks?: string[];
  introduce?: string;
  userLinks?: {
    profileLinkTitle?: string | null | undefined;
    profileLink?: string | null | undefined;
  }[];
}

type Props = { page?: number; setData: Dispatch<SetStateAction<Data>>; data: Data; setPage: Function };

const Interest = ({ data, setData, page, setPage }: Props) => {
  const tech = [
    'Java',
    'JavaScript',
    'Figma',
    'TypeScript',
    'Zeplin',
    'Spring',
    'React',
    'Next.js',
    'Go',
    'Node.js',
    'Vue.js',
    'NestJs',
    'Express',
  ];
  // const list: string[] = [];
  const [list, setList] = useState<string[]>([]);
  console.log(list);
  return (
    <Wrap>
      <Top>
        <div>관심 기술</div>
        <p>내가 관심있는 기술을 선택해주세요</p>
      </Top>
      <Mid>
        {tech.map((v, i) => (
          <img
            src={`https://img.shields.io/badge/${v}-E1E1E1?style=for-the-badge&logo=${v}&logoColor=black`}
            key={i}
            onClick={() => {
              if (list.includes(v)) {
                let c = list.filter((a) => {
                  return a !== v;
                });
                setList(c);
              } else {
                list.push(v);
              }
              console.log(list);
            }}
            style={{
              backgroundColor: 'red',
              borderRadius: 10,
              border: list.includes(v) ? '1px solid red' : '1px solid black',
            }}
          />
        ))}
      </Mid>
      <Bottom>
        <div
          onClick={() => {
            setData({ ...data, userInterestStacks: list });

            setPage(4);
          }}
        >
          계속하기
        </div>
        <span>{page}/4</span>
      </Bottom>
    </Wrap>
  );
};

export default Interest;

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
  width: 100%;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  img {
    border: #161616 1px solid;
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
    cursor: pointer;
    border-radius: 10px;
  }
  span {
    font-size: 11px;
    color: #a2a2a2;
  }
`;
