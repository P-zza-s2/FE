import Header from 'components/common/Header';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { useLocation } from 'react-router-dom';

import

{ useEffect } from 'react';

const MyProjectList = () => {
  const location = useLocation();
  const headerTitle = location.state?.headerTitle || '기본 제목';
  const projectData = location.state?.projectData || 'null';

  useEffect(() => {
    console.log(projectData);
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

      <ul>
        {projectData.map((item) => (
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
  );
};

export default MyProjectList;
