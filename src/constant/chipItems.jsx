import done from 'assets/icons/done.svg';
import ing from 'assets/icons/ing.svg';
import stop from 'assets/icons/stop.svg';

export const FILTER_ITEMS = [
  {
    title: '전체',
    index: 0
  },
  {
    title: '모집중',
    index: 1,
    icon: ing
  },
  {
    title: '완료',
    index: 2,
    icon: done
  },
  {
    title: '중단',
    index: 3,
    icon: stop
  }
];
