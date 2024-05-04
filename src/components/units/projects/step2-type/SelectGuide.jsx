import './SelectGuide.scss';

import { useState } from 'react';

import { Option } from 'components/common/option/Option';
import { Step } from 'components/step/Step';
import activeten from 'images/active-ten.svg';
import activethirty from 'images/active-thirtyday.svg';
import ten from 'images/tenday.svg';
import thirty from 'images/thirtyday.svg';

export function SelectGuide({ step, name, onChange }) {
  const [active, setActive] = useState([false, false]);

  const handleSelect = (selectedIndex) => {
    const newActive = active.map((_, idx) => idx === selectedIndex);
    setActive(newActive);

    const selectedValue = selectedIndex === 0 ? 10 : 30;
    onChange(name, selectedValue);
  };

  return (
    <div>
      <Step value={step}>프로젝트 기간 및 가이드 선택</Step>
      <div className="frame">
        <Option
          onSelect={() => handleSelect(0)} //콜백형태-> 이벤트가 실제 발생했을 떄만 함수 호출
          src={active[0] ? activeten : ten}
          active={active[0]}
          name={name}
        >
          Day-10
        </Option>
        <Option onSelect={() => handleSelect(1)} src={active[1] ? activethirty : thirty} active={active[1]} name={name}>
          Day-30
        </Option>
      </div>
      <div className="message">
        <h4> 1.요구사항 정리</h4>
        <p>고객이 누군가요? 고객이 느끼는 불편함에는 어떤 게 있나요? 고객의 요구사항을 정리해보세요.</p>
      </div>
    </div>
  );
}
