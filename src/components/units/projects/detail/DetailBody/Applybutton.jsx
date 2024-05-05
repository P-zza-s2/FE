import { useState } from 'react';

function Applybutton() {
  const [isClick] = useState(false);
  return (
    <div className="sticky-footer">
      <button className={`footer-button ${isClick ? 'clicked' : ''}`}>
        지원하기
      </button>
    </div>
  );
}
export default Applybutton;
