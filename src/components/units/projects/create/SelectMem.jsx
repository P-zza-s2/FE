import { useState } from 'react';

import { Option } from 'components/common/option/Option';
import { Step } from 'components/step/Step';
import { MEM_TYPE } from 'constant/createProjectOptions';

export function SelectMem({ step, name, onChange }) {
  const [selectedMem, SetSelectedMem] = useState([]);

  const hanldleOptionClick = (mem) => {
    if (!selectedMem.includes(mem)) {
      SetSelectedMem((prev) => [...prev, mem]);
    } else {
      SetSelectedMem(selectedMem.filter((el) => el !== mem));
    }
    onChange(name, selectedMem);
  };

  return (
    <>
      <Step value={step}>어떤 팀원과 함께하고 싶나요?</Step>
      <div className="mem-frame">
        {MEM_TYPE.map(({ mem, activeSrc, src }) => (
          <Option
            key={mem}
            isActive={selectedMem.includes(mem)}
            src={selectedMem.includes(mem) ? activeSrc : src}
            name={name}
            onClick={() => hanldleOptionClick(mem)}
          >
            {mem}
          </Option>
        ))}
      </div>
    </>
  );
}
