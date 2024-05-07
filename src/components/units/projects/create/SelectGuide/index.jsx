import { Step } from 'components/step/Step';

import GuideMessage from './GuideMessage';
import OptionContainer from './OptionContainer';

export function SelectGuide({ step, name, onChange }) {
  return (
    <>
      <Step value={step}>프로젝트 기간 및 가이드 선택</Step>
      <OptionContainer name={name} onChange={onChange} />
      <GuideMessage />
    </>
  );
}
