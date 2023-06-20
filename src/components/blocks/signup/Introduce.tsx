import { restApi } from '@apis/index';
import assets from '@assets';
import { getCookie } from '@utils/Cookie';
import { type } from 'os';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLink, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
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

interface Link {
  name?: string | null;
  linkname?: string | null;
}
type Props = { page?: number; setData: Dispatch<SetStateAction<Data>>; data: Data; setPage: Function };

const Introduce = ({ data, setData, page, setPage }: Props) => {
  const [list, setList] = useState<Link[]>([]);
  const [title, setTitle] = useState<string | null>('');
  const [name, setName] = useState<string | null>('');

  return (
    <Wrap>
      <Top>
        <div>자기소개</div>
        <p>
          크루들에게 나를 보여줄 수 있는 글과 링크를 기입해주세요.<span>(선택사항)</span>
        </p>
      </Top>
      <Mid>
        <InputWrap>
          <textarea maxLength={1000} onChange={(e) => setData({ ...data, introduce: e.target.value })} />
        </InputWrap>
        <LinkWrap>
          <div style={{ overflowY: 'scroll', maxHeight: 69 }}>
            {list?.map((v, i) => (
              <LinkList key={i}>
                <div>
                  <AiOutlineLink />
                </div>
                <div>{v.name}</div>
                <p></p>
                <div>{v.linkname}</div>
                <AiOutlineMinusCircle
                  color="#FF8E72"
                  size={'1.2em'}
                  onClick={() => {
                    const detail = list.filter((c) => v !== c);
                    setList(detail);
                  }}
                />
              </LinkList>
            ))}
          </div>
          <LinkInput>
            <div>
              <AiOutlineLink />
            </div>
            <input
              type="text"
              placeholder="링크제목"
              onChange={(e) => setTitle(e.target.value)}
              value={title ? title : ''}
            />
            <p></p>
            <input
              type="text"
              placeholder="링크를 입력하세요"
              onChange={(e) => setName(e.target.value)}
              value={name ? name : ''}
            />
            <AiOutlinePlusCircle
              color="#1560FB"
              size={'1.2em'}
              onClick={() => {
                const detail = { name: title, linkname: name };
                setTitle('');
                setName('');
                setList([...list, detail]);
              }}
            />
          </LinkInput>
        </LinkWrap>
      </Mid>
      <Bottom>
        <div
          onClick={() => {
            setData({ ...data, link: list });
            setPage(5);
          }}
        >
          완료하기
        </div>
        <span>{page}/4</span>
      </Bottom>
    </Wrap>
  );
};

export default Introduce;

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
    span {
      color: #ccc;
    }
  }
`;
const Mid = styled.div`
  height: 55%;
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  textarea {
    width: 340px;
    height: 160px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    margin-bottom: 20px;
  }
`;
const LinkWrap = styled.div`
  width: 340px;
`;
const LinkInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  input:nth-child(2) {
    width: 20%;

    border: none;
    padding: 4px;
  }
  input:nth-child(4) {
    width: 65%;

    padding: 4px;
    border: none;
  }
  div {
    color: white;
    background-color: #1560fb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }
  p {
    height: 24px;
    border-left: 0.5px solid;
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  margin-bottom: 10px;
  div:nth-child(2) {
    width: 20%;
    padding: 4px;
    display: flex;
    font-size: 11px;
    color: #a2a2a2;
    justify-content: flex-start;
  }
  div:nth-child(4) {
    font-size: 11px;
    width: 65%;
    justify-content: flex-start;
    display: flex;
    color: #a2a2a2;

    padding: 4px;
    border: none;
  }
  div:nth-child(1) {
    color: white;
    background-color: #1560fb;
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
