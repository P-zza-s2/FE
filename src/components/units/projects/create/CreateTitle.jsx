import { useState } from 'react';

import { Input } from 'components/common/input/Input';
import { Step } from 'components/step/Step';

export function CreateTitle({ step, value, name, onChange }) {
  const [title, setTitle] = useState(value);

  const handleTitleChange = (name, val) => {
    setTitle(val);
    onChange(name, val);
  };
  return (
    <div>
      <Step value={step}>
        팀원 모집을 위한 <br /> 게시글 제목을 작성해주세요.
      </Step>
      <Input
        name={name}
        value={title}
        placeholder="입력해주세요"
        onChange={handleTitleChange}
      />
    </div>
  );
}
