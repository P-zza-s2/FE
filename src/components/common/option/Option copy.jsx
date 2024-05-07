import './Option.scss';

import { useState } from 'react';

export function Option({ children, onSelect, src, active, colors }) {
  const [isClick, setIsClick] = useState(false);

  const handleChange = (index) => {
    onSelect(index);
    setIsClick((prev) => !prev);
  };

  return (
    <div
      className={`option-container ${active ? 'clicked' : ''} ${
        isClick ? colors : ''
      }`}
      onClick={handleChange}
    >
      <img src={src} alt="option icon" />
      <div>{children}</div>
    </div>
  );
}
