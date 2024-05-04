import { FILTER_ITEMS } from 'constant/chipItems';

import ChipItem from './ChipItem';

function ChipContainer() {
  return (
    <div className="chip-container">
      {FILTER_ITEMS.map(({ index, title, icon }) => (
        <ChipItem key={index} index={index} title={title} icon={icon} />
      ))}
    </div>
  );
}
export default ChipContainer;
