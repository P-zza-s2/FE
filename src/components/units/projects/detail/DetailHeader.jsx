import delete_icn from 'assets/icons/x.svg';

function DetailHeader() {
  return (
    <header className="project-header">
      <div className="icn-header">
        <img src={delete_icn} />
      </div>
      <div className="title-header">
        <span>모집중</span>
        <div className="pj-title"> 탄소 감소 서비스 팀원 모집합니다! </div>
      </div>
    </header>
  );
}

export default DetailHeader;
