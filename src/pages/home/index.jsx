import './index.scss';

import {
  useEffect,
  useState,
} from 'react';

import Banner from 'components/units/home/Banner';
import ChipContainer from 'components/units/home/ChipContainer';
import HomeHeader from 'components/units/home/HomeHeader';
import ProjectListSection from 'components/units/home/ProjectListSection';

export function Main() {
  const [data, setData] = useState([]);
  const [isClick, setIsClick] = useState([true, true, true, true]);
  const [status, setStatus] = useState();

  const filteredData = data.filter((item) => {
    if (isClick[0]) return true; // '전체'가 선택된 경우 모든 데이터 표시
    let filterCondition = false;
    if (isClick[1] && item.project_status === '모집중') filterCondition = true;
    if (isClick[2] && item.project_status === '완료') filterCondition = true;
    if (isClick[3] && item.project_status === '중단') filterCondition = true;
    return filterCondition;
  });

  useEffect(() => {
    const access_key = JSON.parse(localStorage.getItem('ACCESS_KEY'));
    const Datas = async () => {
      try {
        const response = await instance.get(`/projects?offset=20&status=전체`, {
          headers: {
            ACCESS_KEY: access_key
          }
        });
        // 응답 처리
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (access_key) {
      Datas();
    }
  });

  return (
    <div className="bg-gray">
      <HomeHeader />
      <Banner />
      <ChipContainer />
      <ProjectListSection />
      <AddProjectButton />
    </div>
  );
}
