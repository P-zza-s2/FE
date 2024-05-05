import './index.scss';

import Header from 'components/common/Header';
import ButtonContainer from 'components/units/projects/create/ButtonContainer';
import GuideTitle from 'components/units/projects/create/GuideTitle';

function CreateProjectPage() {
  return (
    <>
      <Header title="프로젝트 주제" />
      <div className="topic-bg">
        <GuideTitle />
        <ButtonContainer />
      </div>
    </>
  );
}

export default CreateProjectPage;
