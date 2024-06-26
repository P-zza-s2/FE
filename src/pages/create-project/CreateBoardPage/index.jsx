import './index.scss';

import {
  useEffect,
  useState,
} from 'react';

import { ProjectCreation } from 'api/project';
import Header from 'components/common/Header';
import { CreateDone } from 'components/units/projects/create/CreateDone';
import { CreateTitle } from 'components/units/projects/create/CreateTitle';
import {
  ExplainProject,
} from 'components/units/projects/create/ExplainProject';
import NavigationButton
  from 'components/units/projects/create/NavigationButton';
import { SelectGuide } from 'components/units/projects/create/SelectGuide';
import { SelectMem } from 'components/units/projects/create/SelectMem';

const INITAIL = {
  project_name: '',
  period: '',
  project_desc: '',
  chat_url: '',
  team_members: [
    {
      role: '',
      recruitment_target: 0
    }
  ]
};

export function CreateBoardPage() {
  const [valueStep, setValueStep] = useState(1);

  const [values, setValues] = useState(INITAIL);

  const handleChange = (name, val) => {
    const newValues = values;
    newValues[name] = val;
    setValues(newValues);
  };

  useEffect(() => {
    localStorage.setItem('project', []);

    const handleCreateProject = async () => {
      const storedAccessKey = localStorage.getItem('ACCESS_KEY');
      if (storedAccessKey) {
        const access_key = JSON.parse(storedAccessKey);
        try {
          console.log(values);
          const result = await ProjectCreation(values, access_key); // 회원가입 API를 호출하는 함수
          if (result) {
            console.log('프로젝트 등록 성공:', result);
          }
        } catch (error) {
          console.error('프로젝트 등록 중 오류 발생:', error);
        }
      }
    };
    if (valueStep === 5) {
      localStorage.setItem('project', JSON.stringify(values));
      handleCreateProject();
    }
  }, [valueStep, values]);

  return (
    <>
      <Header
        title="프로젝트 생성"
        valueStep={valueStep}
        onChange={(value) => setValueStep(value)}
      />
      <div className="topic-container">
        {valueStep === 1 && (
          <CreateTitle
            name="project_name"
            step={valueStep}
            value={values.project_name}
            onChange={handleChange}
          />
        )}
        {valueStep === 2 && (
          <SelectGuide
            name="period"
            step={valueStep}
            value={values.period}
            onChange={handleChange}
          />
        )}
        {valueStep === 3 && (
          <SelectMem
            name="team_members"
            step={valueStep}
            value={values.team_members}
            onChange={handleChange}
          />
        )}
        {valueStep === 4 && (
          <ExplainProject
            desc_name="project_desc"
            url_name="chat_url"
            step={valueStep}
            desc={values.project_desc}
            chat_url={values.chat_url}
            onChange={handleChange}
          />
        )}
        {valueStep === 5 && <CreateDone />}
      </div>
      <NavigationButton valueStep={valueStep} setValueStep={setValueStep} />
    </>
  );
}
