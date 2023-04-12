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
        placeholder="여기에 텍스트를 입력하세요..."
      />
    </EditorContainer>
  );
};

export default Editor;
const EditorContainer = styled.div`
  margin-top: 30px;
  text-align: left;
  .ql-container {
    height: 500px;
  }
`;
const EditorTitle = styled.p`
  margin-bottom: 10px;
`;
