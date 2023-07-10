import React, { useState } from 'react';
import EvaluationModal from '../EvaluationModal';
import useOpenModal from '@hooks/modal';

const Index = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();

  return (
    <div>
      <button onClick={clickModal}>열려라 버튼</button>
      {isOpenModal && <EvaluationModal closeModal={closeModal} />}
    </div>
  );
};

export default Index;
