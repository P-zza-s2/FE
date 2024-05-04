// import { useState } from 'react';

// function ChipItem({ title, index }) {
//   const [isClick, setIsClick] = useState([true, true, true, true]);
//   const [, setStatus] = useState();

//   const filteredData = data.filter((item) => {
//     if (isClick[0]) return true; // '전체'가 선택된 경우 모든 데이터 표시
//     let filterCondition = false;
//     if (isClick[1] && item.project_status === '모집중') filterCondition = true;
//     if (isClick[2] && item.project_status === '완료') filterCondition = true;
//     if (isClick[3] && item.project_status === '중단') filterCondition = true;
//     return filterCondition;
//   });
//   return (
//     <div
//       className={`chip ${isClick[index] ? 'active' : ''}`}
//       onClick={() => {
//         const newClick = isClick.map(() => !isClick[0]);
//         setIsClick(newClick);
//         setStatus(title);
//       }}
//     >
//       {title}
//     </div>
//   );
// }

// export default ChipItem;
