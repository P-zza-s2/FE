import './StickyFooter.scss';

import { useState } from 'react';

import { Button } from '../button/Button';

export function StickyFooter() {
  const [isClick] = useState(false);
  return (
    <div className="sticky-footer">
      <Button className={`footer-button ${isClick ? 'clicked' : ''}`}>지원하기</Button>
    </div>
  );
}
