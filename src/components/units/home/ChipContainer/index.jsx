import ChipItem from './ChipItem';

function ChipContainer() {
  return (
    <div className="chip-container">
      <ChipItem title="전체" index={0} />
      <ChipItem title="모집중" index={1} />
      <ChipItem title="완료" index={2} />
      <ChipItem title="중단" index={3} />
      {/* <div
        className={`chip ${isClick[1] ? 'active' : ''}`}
        onClick={() => {
          const newClick = [...isClick];
          newClick[1] = !newClick[1];
          if (newClick[0]) newClick[0] = !newClick[0];
          setIsClick(newClick);
          setStatus('모집중');
        }}
      >
        <img src={ing} />
        모집중
      </div>
      <div
        className={`chip ${isClick[2] ? 'active' : ''}`}
        onClick={() => {
          const newClick = [...isClick];
          newClick[2] = !newClick[2];
          if (newClick[0]) newClick[0] = !newClick[0];
          setIsClick(newClick);
          setStatus('완료');
        }}
      >
        <img src={done} />
        완료
      </div>
      <div
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
      </div> */}
    </div>
  );
}
export default ChipContainer;
