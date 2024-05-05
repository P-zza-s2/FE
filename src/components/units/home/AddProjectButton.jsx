import useToggle from 'hooks/useToggle';
import plus_icon from 'images/plus_icon.svg';
import { useNavigate } from 'react-router-dom';

function AddProjectButton() {
  const navigate = useNavigate();

  const { toggle, isActive } = useToggle();

  const handleClick = () => {
    toggle();
    setTimeout(() => {
      navigate('/create-project');
    }, 200);
  };

  return (
    <div className={`add-container ${isActive ? 'color-change' : ''}`}>
      <img className="add-icn" src={plus_icon} onClick={handleClick} />
    </div>
  );
}

export default AddProjectButton;
