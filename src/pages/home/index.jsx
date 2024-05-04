import './index.scss';

import {
  useEffect,
  useState,
} from 'react';

import { instance } from 'api/instance';
import AddProjectButton from 'components/units/home/AddProjectButton';
import Banner from 'components/units/home/Banner';
import ChipContainer from 'components/units/home/ChipContainer';
import HomeHeader from 'components/units/home/HomeHeader';
import ProjectListSection from 'components/units/home/ProjectListSection';

export function Main() {
  const [, setData] = useState([]);

  useEffect(() => {
    const access_key = JSON.parse(localStorage.getItem('ACCESS_KEY'));
    const Datas = async () => {
      try {
        const response = await instance.get('/projects?offset=20&status=전체', {
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
