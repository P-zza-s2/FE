function ChipItem({ title, index }) {
  return (
    <div
      className={`chip ${isClick[index] ? 'active' : ''}`}
      onClick={() => {
        const newClick = isClick.map(() => !isClick[0]);
        setIsClick(newClick);
        setStatus(title);
      }}
    >
      {title}
    </div>
  );
}

export default ChipItem;
