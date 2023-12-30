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
      {/* <article className="myProject">
        <ul className="myProjectList">
          <div className="project-section">
            <ul>
              {filteredData.map((item) => (
                <li key={item.project_id}>
                  <ProjectCard
                    id={item.project_id}
                    status={item.project_status}
                    name={item.project_name}
                    desc={item.project_desc}
                    mem={item.team_members}
                  />
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </article> */}
    </div>
  );
};

export default MyProjectList;
