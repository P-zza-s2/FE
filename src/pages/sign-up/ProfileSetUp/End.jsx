import './End.scss';

import { Button } from 'components/common/button/Button';
import end from 'images/end_charac.svg';

const End = () => {
  return (
    <div className="end-bg">
      <div className="sub-title">
        이지원님,
        <br /> 완주를 축하합니다!
      </div>
      <div className="img-container">
        <img src={end} className="end"></img>
      </div>

      <Button className="button" onClick={() => {}}>
        완주 뱃지 받으러 가기
      </Button>
    </div>
  );
};

export default End;
