import flag from 'assets/icons/icn_flag.svg';

function Duration() {
  return (
    <div className="pj-section">
      <div className="item">
        <img src={flag} />
        <span>프로젝트 기간</span>
      </div>
      <span>23.12.11-23.12.17 | 총 10일 </span>
    </div>
  );
}

export default Duration;
