import { useNavigate } from 'react-router-dom';

function AddProjectButton() {
  const navigate = useNavigate();
  const [addClick, setAddClick] = useState(false);
  const handleClick = () => {
    setAddClick(!addClick); // 클릭 상태를 토글

    setTimeout(() => {
      navigate('../create-topic'); // 애니메이션 후 페이지 이동
    }, 200); // 애니메이션 지속 시간 500ms
  };

  return (
    <div className={`add-container ${addClick ? 'color-change' : ''}`} onClick={handleClick}>
      <img className="add-icn" src={plus_icon} />
    </div>
  );
}

export default AddProjectButton;