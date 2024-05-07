import './Option.scss';

export function Option({ src, isActive, children, onClick }) {
  // const [active, setActive] = useState(false);

  // const handleSelect = () => {
  //   // const newActive = active.map((_, idx) => idx === selectedIndex);
  //   // setActive(newActive);

  //   setActive((prev) => !prev);
  //   onChange(name, 1);
  // };

  return (
    <div
      className={`option-container ${isActive ? 'clicked' : ''}`}
      onClick={onClick}
    >
      <img src={src} alt="option icon" />
      <div>{children}</div>
    </div>
  );
}
