import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import { MY_PROJECT_SUBJECTS } from '../../constant/myProjectSubjects';
import {
  getMyProject,
  getMyProjectCompleted,
  getMyProjectInProgress,
  getMyProjectPending,
  getMyProjectRejected,
  getMyProjectStoped,
} from '../../api/project';
import './MyProject.scss';
import { useNavigate } from 'react-router-dom';
import complete from '../../images/my-project/completed.svg';
import inProgress from '../../images/my-project/inProgress.svg';
import pending from '../../images/my-project/pending.svg';
import rejected from '../../images/my-project/rejected.svg';
import stoped from '../../images/my-project/stopped.svg';
import right_arrow from '../../assets/icons/right_arrow.svg';

const MyProject = () => {
  const [myProject, setMyProject] = useState([]);
  const [status_inProgress, setInProgress] = useState([]);
  const [status_pending, setPending] = useState([]);
  const [status_complete, setComplete] = useState([]);
  const [status_rejected, setRejected] = useState([]);
  const [status_stoped, setStoped] = useState([]);

  const navigate = useNavigate();

  const projectStates = {
    inProgress,
    pending,
    complete,
    rejected,
    stoped,
  };
  const getInprogressQuery = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      const access_key = JSON.parse(storedAccessKey);
      try {
        const data = await getMyProjectInProgress(access_key);
        setInProgress((prev) => [...prev, ...data]);
        return data; //return 을 꼭 해주어야 한다!!!
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  };
  const getPendingQuery = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      const access_key = JSON.parse(storedAccessKey);
      try {
        const data = await getMyProjectPending(access_key);
        setPending((prev) => [...prev, ...data]);
        return data;
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  };
  const getCompleteQuery = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      const access_key = JSON.parse(storedAccessKey);
      try {
        const data = await getMyProjectCompleted(access_key);
        setComplete((prev) => [...prev, ...data]);
        return data;
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  };
  const getRejectedQuery = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      const access_key = JSON.parse(storedAccessKey);
      try {
        const data = await getMyProjectRejected(access_key);
        setRejected((prev) => [...prev, ...data]);
        return data;
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  };
  const getStopedQuery = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      const access_key = JSON.parse(storedAccessKey);
      try {
        const data = await getMyProjectStoped(access_key);
        setStoped((prev) => [...prev, ...data]);
        return data;
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  };

  const handleProjectClick = async (subjectName) => {
    try {
      let data;
      switch (subjectName) {
        case '진행':
          data = await getInprogressQuery();
          console.log(data); // 여기에서 데이터 확인
          break;
        case '심사':
          data = await getPendingQuery();
          break;
        case '완료':
          data = await getCompleteQuery();
          break;
        case '거절':
          data = await getRejectedQuery();
          break;
        case '중단':
          data = await getStopedQuery();
          break;
        default:
          return;
      }

      navigate('./list', {
        state: {
          headerTitle: subjectName + ' 프로젝트',
          projectData: data,
        },
      });
    } catch (error) {
      console.error(
        `${subjectName} 프로젝트 데이터를 불러오는 데 실패했습니다:`,
        error
      );
    }
  };

  useEffect(() => {
    console.log(status_inProgress);
    //전체 프로젝트 조회
    const getMyProjects = async () => {
      const storedAccessKey = localStorage.getItem('ACCESS_KEY');
      if (storedAccessKey) {
        const access_key = JSON.parse(storedAccessKey);
        try {
          const data = await getMyProject(access_key);
          setMyProject(data);
        } catch (error) {
          console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
        }
      }
    };

    getMyProjects();
  }, []);
  return (
    <div>
      <Header title="내 프로젝트" useType="myProject" />
      <article className="myProject">
        <ul className="myProjectList">
          {MY_PROJECT_SUBJECTS.map((subject, i) => {
            const projectCount =
              myProject.find((p) => p.apply_status === subject.name)?.count ||
              0;
            const imageSrc = projectStates[subject.stateKey];

            return (
              <li
                key={subject.name}
                onClick={() => handleProjectClick(subject.name)}
              >
                <p>
                  {subject.name} 프로젝트
                  <img src={right_arrow} />
                </p>
                <div>
                  <p>{projectCount}</p>
                  <span style={{ color: 'black' }}>개</span>
                </div>
                <div>
                  <img src={imageSrc} />
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default MyProject;
