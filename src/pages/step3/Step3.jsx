// ExperienceInputPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { DropBox } from '../../components/dropbox/DropBox';
import Modal from '../../components/modal/Modal';

function ExperienceInputPage({ value }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Step value={value}>경력을 입력해주세요</Step>
      <div className="infobox">
        <DropBox onClick={() => setModalOpen(true)}></DropBox>
        {modalOpen && <Modal step="3" modalstate={modalOpen}></Modal>}
      </div>
    </div>
  );
}

export default ExperienceInputPage;
