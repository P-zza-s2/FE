import React, { useEffect, useState } from 'react';
import Header from '../../components/elements/Header';
import './MyProject.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const MyProjectList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerTitle = location.state?.headerTitle || '기본 제목';

  useEffect(() => {
    //전체 프로젝트 조회
    const getMyProjects = async () => {
      //   const storedAccessKey = localStorage.getItem('ACCESS_KEY');
      //   if (storedAccessKey) {
      //     const access_key = JSON.parse(storedAccessKey);
      //     try {
      //       const data = await getMyProject(access_key);
      //       console.log(myProject);
      //     } catch (error) {
      //       console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', error);
      //     }
      //   }
    };

    getMyProjects();
  }, []);
  return (
    <div>
      <Header title={headerTitle} useType="myProject" />
      <article className="myProject">
        <ul className="myProjectList">
          {/* {MY_PROJECT_SUBJECTS.map((subject) => {
            const projectCount = projectStates[subject.stateKey]?.length || 0;
            return (
              <li
                key={subject.name}
                onClick={() => navigate('../myproject/:id')}
              >
                <p>{projectCount}</p>
                <p>{subject.name}</p>
              </li>
            );
          })} */}
        </ul>
      </article>
    </div>
  );
};

export default MyProjectList;
