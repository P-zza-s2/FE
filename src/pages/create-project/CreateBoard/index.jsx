import './index.scss';

import {
  useEffect,
  useState,
} from 'react';

import { ProjectCreation } from 'api/project';
import { Button } from 'components/common/button/Button';
import Header from 'components/common/Header';
import { CreateTitle } from 'components/units/projects/step1-title/CreateTitle';
import { SelectGuide } from 'components/units/projects/step2-type/SelectGuide';
import { SelectMem } from 'components/units/projects/step3-member/SelectMem';
import {
  ExplainProject,
} from 'components/units/projects/step4-intro/ExplainProject';
import { CreateDone } from 'components/units/projects/step5-finish/CreateDone';

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

export function CreateBoard() {
  const [valueStep, setValueStep] = useState(1);
  const [isClick, setIsClick] = useState(false);
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

  const renderContent = () => {
    switch (valueStep) {
      case 1:
        return <CreateTitle name="project_name" step={valueStep} value={values.project_name} onChange={handleChange} />;
      case 2:
        return <SelectGuide name="period" step={valueStep} value={values.period} onChange={handleChange} />;
      case 3:
        return <SelectMem name="team_members" step={valueStep} value={values.team_members} onChange={handleChange} />;
      case 4:
        return (
          <ExplainProject
            desc_name="project_desc"
            url_name="chat_url"
            step={valueStep}
            desc={values.project_desc}
            chat_url={values.chat_url}
            onChange={handleChange}
          />
        );
      case 5:
        return <CreateDone />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header title="프로젝트 생성" valueStep={valueStep} onChange={(value) => setValueStep(value)}></Header>
      <div className="topic-container">{renderContent()}</div>
      <Button
        className={`button ${isClick ? 'clicked' : ''}`}
        onClick={() => {
          setValueStep(valueStep + 1);
          setIsClick(true);
        }}
      >
        {valueStep === 5 ? '홈으로' : '다음'}
      </Button>
    </>
  );
}
