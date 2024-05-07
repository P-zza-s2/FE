import { useState } from 'react';

import { Option } from 'components/common/option/Option';
import { DURATION_TYPE } from 'constant/createProjectOptions';

function OptionContainer({ name, onChange }) {
  const [activeOption, setActiveOption] = useState(null);

  const hanldleOptionClick = (option) => {
    setActiveOption(option);
    onChange(name, option);
  };

  return (
    <div className="frame">
      {DURATION_TYPE.map(({ duration, activeSrc, src }) => (
        <Option
          key={duration}
          isActive={activeOption === duration}
          src={activeOption === duration ? activeSrc : src}
          name={name}
          onClick={() => hanldleOptionClick(duration)}
        >
          Day-{duration}
        </Option>
      ))}
    </div>
  );
}
export default OptionContainer;
