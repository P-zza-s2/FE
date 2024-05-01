import './ProjectAbout.scss';
import delete_icn from '../../assets/icons/x.svg';
import flag from '../../assets/icons/icn_flag.svg';
import mem from '../../assets/icons/icn_mem.svg';
import charac from '../../images/mem_detail.svg';
import { StickyFooter } from '../../components/sticky-footer/StickyFooter';
import { useEffect, useState } from 'react';
import { getProjectDetail } from '../../api/project';
import { useParams } from 'react-router-dom';

export function ProjectAbout() {
  const param = useParams(); // URL에서 프로젝트 ID를 얻습니다.
  const [info, setInfo] = useState({}); // 로컬 상태 생성
  useEffect(() => {
    const getProjectQuery = async () => {
      const storedAccessKey = localStorage.getItem('ACCESS_KEY');
      if (storedAccessKey) {
        const access_key = JSON.parse(storedAccessKey);
        try {
          const data = await getProjectDetail(param.id, access_key);
          setInfo(data);
          console.log(data);
          return data;
        } catch (error) {
          console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
        }
      }
    };
    getProjectQuery();
  }, []);

  return (
    <div>
      <header className="project-header">
        <div className="icn-header">
          <img src={delete_icn} />
        </div>
        <div className="title-header">
          <span>{info.project_status}</span>
          <div className="pj-title"> {info.project_name} </div>
        </div>
        <div className="pj-section">
          <div className="item">
            <img src={flag} />
            <span>프로젝트 기간</span>
          </div>
          <span>23.12.11-23.12.17 | 총 10일 </span>
        </div>
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
      </header>
      <PresentStatus></PresentStatus>
      <DetailAboutPJ info={info}></DetailAboutPJ>
      <StickyFooter></StickyFooter>
    </div>
  );
}

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
function DetailAboutPJ({ info }) {
  return (
    <div className="detail-section">
      <p className="detail-content">{info.project_desc}</p>
    </div>
  );
}
