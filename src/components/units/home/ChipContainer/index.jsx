import done from 'assets/icons/done.svg';
import ing from 'assets/icons/ing.svg';
import stop from 'assets/icons/stop.svg';

import ChipItem from './ChipItem';

const ITEMS = [
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

function ChipContainer() {
  // const [isClick] = useState([true, true, true, true]);
  // const [status, setStatus] = useState();

  // const filteredData = data.filter((item) => {
  //   if (isClick[0]) return true; // '전체'가 선택된 경우 모든 데이터 표시
  //   let filterCondition = false;
  //   if (isClick[1] && item.project_status === '모집중') filterCondition = true;
  //   if (isClick[2] && item.project_status === '완료') filterCondition = true;
  //   if (isClick[3] && item.project_status === '중단') filterCondition = true;
  //   return filterCondition;
  // });
  return (
    <div className="chip-container">
      {ITEMS.map((item) => (
        <ChipItem title={item.title} index={item.index} key={item.index} icon={item.icon} />
      ))}

      {/* <div
        className={`chip ${isClick[3] ? 'active' : ''}`}
        onClick={() => {
          const newClick = [...isClick];
          newClick[3] = !newClick[3];
          if (newClick[0]) newClick[0] = !newClick[0];
          setIsClick(newClick);
          setStatus('중단');
        }}
      >
        <img src={stop} />
        중단
      </div>  */}
    </div>
  );
}
export default ChipContainer;
