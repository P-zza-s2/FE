import charac from 'images/mem_detail.svg';

function PresentStatus() {
  return (
    <div className="detail-section">
      <div className="talk-box">
        <div className="talk">
          지금 <span style={{ color: 'red' }}>2명</span> 의 팀원이 함께하고
          있어요!
        </div>
        <img src={charac} />
      </div>
    </div>
  );
}
export default PresentStatus;
