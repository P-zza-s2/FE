import Applybutton from './Applybutton';
import Duration from './Duration';
import Explanation from './Explanation';
import Position from './Position';
import PresentStatus from './PresentStatus';

function DetailBody() {
  return (
    <div className="section-container">
      <Duration />
      <Position />
      <PresentStatus />
      <Explanation />
      <Applybutton />
    </div>
  );
}
export default DetailBody;
