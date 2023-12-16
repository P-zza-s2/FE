import { useState } from 'react';
import { Button } from '../button/Button';
import './StickyFooter.scss';
export function StickyFooter() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div class="sticky-footer">
      <Button className={`footer-button ${isClick ? 'clicked' : ''}`}>
        지원하기
      </Button>
    </div>
  );
}
