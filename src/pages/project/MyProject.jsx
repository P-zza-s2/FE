import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import { MY_PROJECT_SUBJECTS } from '../../constant/myProjectSubjects';
import { getMyProject } from '../../api/project';
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
          {MY_PROJECT_SUBJECTS.map((subject, i) => {
            const projectCount =
              myProject.find((p) => p.apply_status === subject.name)?.count ||
              0;
            const imageSrc = projectStates[subject.stateKey];

            return (
              <li
                key={subject.name}
                onClick={() =>
                  navigate('./list', {
                    state: { headerTitle: subject.name + ' 프로젝트' },
                  })
                }
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
