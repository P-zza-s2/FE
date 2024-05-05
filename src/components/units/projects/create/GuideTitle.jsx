import topic_charac from 'images/topic_charac.svg';

function GuideTitle() {
  return (
    <>
      <div className="topic-title">
        <h3>프로젝트 주제를 선정하셨나요?</h3>
        <p>주제가 없으면 저희가 도와드릴게요 !</p>
      </div>
      <div className="image">
        <img src={topic_charac} />
      </div>
    </>
  );
}
export default GuideTitle;
