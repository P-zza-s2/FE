import activeten from 'images/active-ten.svg';
import activethirty from 'images/active-thirtyday.svg';
import active_design from 'images/position/active_design_charac.svg';
import active_dev from 'images/position/active_dev_charac.svg';
import active_pm from 'images/position/active_pm_charac.svg';
import design from 'images/position/design_charac.svg';
import dev from 'images/position/dev_charac.svg';
import pm from 'images/position/pm_charac.svg';
import ten from 'images/tenday.svg';
import thirty from 'images/thirtyday.svg';

export const DURATION_TYPE = [
  {
    duration: 10,
    activeSrc: activeten,
    src: ten
  },
  {
    duration: 30,
    activeSrc: activethirty,
    src: thirty
  }
];

export const MEM_TYPE = [
  {
    mem: '디자이너',
    activeSrc: active_design,
    src: design
  },
  {
    mem: '기획자',
    activeSrc: active_pm,
    src: pm
  },
  {
    mem: '프론트 개발자',
    activeSrc: active_dev,
    src: dev
  },
  {
    mem: '백엔드 개발자',
    activeSrc: active_dev,
    src: dev
  }
];
