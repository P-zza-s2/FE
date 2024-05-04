import useToggle from 'hooks/useToggle';

function ChipItem({ title, icon }) {
  const { isActive, toggle } = useToggle();
  return (
    <div
      className={`chip ${isActive ? 'active' : ''}`}
      onClick={() => toggle()}
    >
      {icon && <img src={icon} />}
      {title}
    </div>
  );
}

export default ChipItem;
