import mem from 'assets/icons/icn_mem.svg';

function Position() {
  return (
    <div className="pj-section">
      <div className="item">
        <img src={mem} />
        <span>모집 인원</span>
      </div>
      <div className="position-container">
        <span className="position">기획</span>
        <span className="position">디자인</span>
        <span className="position">프론트</span>
        <span className="position">벡엔드 </span>
      </div>
    </div>
  );
}

export default Position;
