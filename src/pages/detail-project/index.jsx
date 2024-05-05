import './index.scss';

import DetailBody from 'components/units/projects/detail/DetailBody';
import DetailHeader from 'components/units/projects/detail/DetailHeader';
import { useParams } from 'react-router-dom';

function ProjectDetailPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <DetailHeader />
      <DetailBody />
    </>
  );
}
export default ProjectDetailPage;
