import useToggle from 'hooks/useToggle';
import { useNavigate } from 'react-router-dom';

function ButtonItem({ title }) {
  const { isActive, toggle } = useToggle();
  const navigate = useNavigate();
  return (
    <button
      className={`select-btn ${isActive ? 'btn-clicked' : ''}`}
      onClick={() => {
        toggle();
        setTimeout(() => {
          navigate('/create-board');
        }, 200);
      }}
    >
      {title}
    </button>
  );
}
export default ButtonItem;
