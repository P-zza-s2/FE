import { useState } from 'react';

import { Button } from 'components/common/button/Button';

function NavigationButton({ valueStep, setValueStep }) {
  const [isClick, setIsClick] = useState(false);
  return (
    <Button
      className={`button ${isClick ? 'clicked' : ''}`}
      onClick={() => {
        setValueStep(valueStep + 1);
        setIsClick(true);
      }}
    >
      {valueStep === 5 ? '홈으로' : '다음'}
    </Button>
  );
}

export default NavigationButton;
