import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { ProjectDescriptionAtom } from '@components/atoms/project';

type Props = {};

const Editor = (props: Props) => {
  const [ProjectDescription, setProjectDescription] = useRecoilState(ProjectDescriptionAtom);

  function handleChange(value: any) {
    setProjectDescription(value);
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ],
  };

  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  return (
    <EditorContainer>
      <EditorTitle>프로젝트 설명</EditorTitle>
      <ReactQuill
        value={ProjectDescription}
        modules={modules}
        formats={formats}
        onChange={handleChange}
        placeholder="프로젝트에 관한 설명을 적어주세요"
      />
    </EditorContainer>
  );
};

export default Editor;
const EditorContainer = styled.div`
  margin-top: 48px;
  text-align: left;
  .ql-container {
    height: 500px;
  }
`;
const EditorTitle = styled.p`
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 28px;
`;
