import React, { useState } from 'react';
import styled from 'styled-components';
import { evaluate } from '@utils/Evaluate';
import goody from '@assets/good.svg';
import sosoy from '@assets/soso.svg';
import bady from '@assets/bad.svg';

type Props = {
  data: any;
  setData: any;
  setPage: any;
};

const SelectEvaluation = (props: Props) => {
  const [good, setGood] = useState<number[]>([]);
  const [soso, setSoso] = useState<number[]>([]);
  const [bad, setBad] = useState<number[]>([]);

  const select = (id: number, type: string) => {
    if (type === 'good') {
      setGood((prev) => {
        if (prev.includes(id)) {
          const updatedList = prev.filter((item) => item !== id);
          return [...updatedList];
        } else {
          return [...prev, id];
        }
      });
    }
    if (type === 'soso') {
      setSoso((prev) => {
        if (prev.includes(id)) {
          const updatedList = prev.filter((item) => item !== id);
          return [...updatedList];
        } else {
          return [...prev, id];
        }
      });
    }
    if (type === 'bad') {
      setBad((prev) => {
        if (prev.includes(id)) {
          const updatedList = prev.filter((item) => item !== id);
          return [...updatedList];
        } else {
          return [...prev, id];
        }
      });
    }
  };

  const onclick = () => {
    const data = {
      good: good,
      soso: soso,
      bad: bad,
    };
    props.setData((prev: any) => {
      return { ...prev, evaluation: data };
    });
    props.setPage(2);
  };

  return (
    <>
      <Wrap>
        <Row type="good">
          <img src={goody} />
          {evaluate.slice(0,5).map((item, index) => {
            return (
              <div
                onClick={() => select(item.id, 'good')}
                style={{
                  color: good.includes(item.id) ? 'var(--main)' : 'black',
                  // color: good.includes(item.id) ? 'white' : 'black',
                  border: good.includes(item.id) ? '1px solid var(--main)' : '',
                }}
              >
                <span>{item.content}</span>
              </div>
            );
          })}
        </Row>
        <Row type="soso">
          <img src={sosoy} />
          {evaluate.slice(5,10).map((item, index) => {
            return (
              <div
                onClick={() => select(item.id, 'soso')}
                style={{
                  backgroundColor: soso.includes(item.id) ? 'var(--main)' : 'white',
                  color: soso.includes(item.id) ? 'white' : 'black',
                }}
              >
                <span>{item.content}</span>
              </div>
            );
          })}
        </Row>
        <Row type="bad">
          <img src={bady} />
          {evaluate.slice(10,15).map((item, index) => {
            return (
              <div
                onClick={() => select(item.id, 'bad')}
                style={{
                  backgroundColor: bad.includes(item.id) ? 'var(--main)' : 'white',
                  color: bad.includes(item.id) ? 'white' : 'black',
                }}
              >
                <span>{item.content}</span>
              </div>
            );
          })}
        </Row>
      </Wrap>
      <Btn onClick={onclick}>계속하기</Btn>
    </>
  );
};

export default SelectEvaluation;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: 'row';
  justify-content: center;
  gap: 1.5%;
  margin-block: 15px;
`;
const Row = styled.div<{ type: string }>`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* background-color: aliceblue; */
  div {
    text-align: left;
    height: 20%;
    width: 100%;
    padding: 10px;
    font-size: 13px;
    line-height: 22px;
    box-shadow: 0px 0px 21px 0px rgba(89, 102, 122, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const Btn = styled.div`
  padding: 5px 32px;
  background-color: var(--main);
  color: white;
  border-radius: 5px;
  font-size: 14px;
  line-height: 22px;
  margin-top: 10px;
  cursor: pointer;
`;
