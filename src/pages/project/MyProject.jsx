import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import { MY_PROJECT_SUBJECTS } from '../../constant/myProjectSubjects';
import {
  getMyProject,
  getMyProjectInProgress,
  getMyProjectPending,
  getMyProjectRejected,
  getMyProjectStoped,
} from '../../api/project';
import './MyProject.scss';
import { useNavigate } from 'react-router-dom';

const MyProject = () => {
  const [myProject, setMyProject] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [pending, setPending] = useState([]);
  const [complete, setComplete] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [stoped, setStoped] = useState([]);
  const navigate = useNavigate();

  const projectStates = {
    inProgress,
    pending,
    complete,
    rejected,
    stoped,
  };

  useEffect(() => {
    //전체 프로젝트 조회
    const getMyProjects = async () => {
      const storedAccessKey = localStorage.getItem('ACCESS_KEY');
      if (storedAccessKey) {
        const access_key = JSON.parse(storedAccessKey);
        try {
          const data = await getMyProject(access_key);
          setMyProject(data);
          console.log(myProject);
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
          {MY_PROJECT_SUBJECTS.map((subject) => {
            const projectCount = projectStates[subject.stateKey]?.length || 0;
            console.log(projectStates[subject]);
            return (
              <li
                key={subject.name}
                onClick={() =>
                  navigate('./list', { state: { headerTitle: subject.name } })
                }
              >
                <p>{projectCount}</p>
                <p>{subject.name}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default MyProject;
