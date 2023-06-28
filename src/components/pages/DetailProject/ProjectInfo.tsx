import React from 'react';
import styled from 'styled-components';

interface ProjectInfoProps {}

interface Data {
  '프로젝트 시작일자': string;
  모집인원: {
    백엔드: number;
    프론트엔드: number;
    디자이너: number;
    PM: number;
  };
  설명: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = () => {
  const data: Data = {
    '프로젝트 시작일자': '2023-06-29',
    모집인원: {
      백엔드: 1,
      프론트엔드: 1,
      디자이너: 1,
      PM: 1,
    },
    설명: ` 이 영락과 무엇을 품에 하는 길을 얼마나 사막이다.
    <br />
    <br />
    피부가 행복스럽고 이상 어디 청춘을 얼마나 그들의 전인 사막이다. 두기 따뜻한 피고 길지 것이다. 얼음 되는 못할
    없는 사막이다. 불어 대중을 군영과 인간의 우리의 할지니, 천자만홍이 별과 아니다. 웅대한 쓸쓸한 끓는 생의 어디
    오직 커다란 있는 피다.
    <br />
    <br />
    듣기만 청춘의 모래뿐일 끝까지 품고 대고, 사막이다. 이상은 같은 뭇 능히 귀는 예수는 것이 약동하다. 산야에 얼마나
    그것은 투명하되 황금시대다. 만천하의 있는 트고, 것이다. 실로 그들의 우리 그들은 전인 하는 보내는 속에서 청춘
    아니다
    <br />
    <br />
    듣기만 청춘의 모래뿐일 끝까지 품고 대고, 사막이다. 이상은 같은 뭇 능히 귀는 예수는 것이 약동하다. 산야에 얼마나
    그것은 투명하되 황금시대다. 만천하의 있는 트고, 것이다. 실로 그들의 우리 그들은 전인 하는 보내는 속에서 청춘
    아니다`,
  };

  const createMarkup = (text: string): { __html: string } => {
    return { __html: text };
  };

  return (
    <ProjectInfoContainer>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            {key === '모집인원' ? (
              <td>
                <RoleContainer>
                  {Object.entries(value).map(([role, count]) => (
                    <RoleWrap key={role}>
                      <RoleText>{role}</RoleText>
                      <span>{count as React.ReactNode} </span>명
                    </RoleWrap>
                  ))}
                </RoleContainer>
              </td>
            ) : (
              <td dangerouslySetInnerHTML={createMarkup(value)} />
            )}
          </tr>
        ))}
      </tbody>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;

const ProjectInfoContainer = styled.table`
  width: 100%;
  tr {
    margin-bottom: 48px;
    display: block;
  }
  th {
    width: 180px;
    text-align: left;
    vertical-align: top;
  }
  td {
  }
`;

const RoleContainer = styled.div`
  width: 70%;
  flex-wrap: wrap;
  display: flex;
  gap: 10px 154px;
`;
const RoleText = styled.p`
  width: 180px;
`;
const RoleWrap = styled.div`
  display: flex;
  gap: 32px;
`;
