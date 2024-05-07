// import { useState } from 'react';

// import { Option } from 'components/common/option/Option';
// import { Step } from 'components/step/Step';
// import active_design from 'images/position/active_design_charac.svg';
// import active_dev from 'images/position/active_dev_charac.svg';
// import active_pm from 'images/position/active_pm_charac.svg';
// import design from 'images/position/design_charac.svg';
// import dev from 'images/position/dev_charac.svg';
// import pm from 'images/position/pm_charac.svg';
// import { MEM_TYPE } from 'constant/createProjectOptions';

// export function SelectMem({ step, name, value, onChange }) {
//   const [teams, setTeams] = useState(value);
//   const [active, setActive] = useState([false, false, false, false]);

//   const teamRoles = [' BE개발', 'FE개발', '기획', '디자인'];

//   const handleTeamChange = (index) => {
//     const newActive = [...active];
//     newActive[index] = !newActive[index]; // 현재 인덱스의 상태를 토글
//     setActive(newActive);

//     if (newActive[index]) {
//       setTeams([
//         ...teams,
//         {
//           role: teamRoles[index],
//           recruitment_target: 1
//         }
//       ]);
//     } else {
//       setTeams(teams.filter((team) => team.role !== teamRoles[index]));
//     }

//     onChange(name, teams);
//   };

//   return (
//     <div>
//       <Step value={step}>어떤 팀원과 함께하고 싶나요?</Step>
//       <div className="mem-frame">
//         <div className="row">
//           {MEM_TYPE.map(({ mem, activeSrc, src }) => (
//             <Option
//               key={mem}
//               isActive={activeOption === mem}
//               src={activeOption === duration ? activeSrc : src}
//               name={name}
//               onClick={() => hanldleOptionClick(duration)}
//             >
//               Day-{duration}
//             </Option>
//           ))}
//           <Option
//             className="dev"
//             onSelect={() => handleTeamChange(0)}
//             src={active[0] ? active_dev : dev}
//             active={active[0]}
//             name={name}
//           >
//             BE개발
//           </Option>
//           <Option
//             className="dev"
//             onSelect={() => handleTeamChange(1)}
//             src={active[1] ? active_dev : dev}
//             active={active[1]}
//             name={name}
//           >
//             FE개발
//           </Option>
//         </div>
//         <div className="row">
//           <Option
//             className="pm"
//             onSelect={() => handleTeamChange(2)}
//             src={active[2] ? active_pm : pm}
//             active={active[2]}
//             name={name}
//           >
//             기획
//           </Option>
//           <Option
//             className="design"
//             onSelect={() => handleTeamChange(3)}
//             src={active[3] ? active_design : design}
//             active={active[3]}
//             name={name}
//           >
//             디자인
//           </Option>
//         </div>
//       </div>
//     </div>
//   );
// }
