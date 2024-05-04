import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { PROJECT_LIST_DATA } from 'constant/project';

function ProjectListSection() {
  return (
    <div className="project-section">
      <ul>
        {PROJECT_LIST_DATA.map((item) => (
          <li key={item.project_id}>
            <ProjectCard
              id={item.project_id}
              status={item.project_status}
              name={item.project_name}
              desc={item.project_desc}
              mem={item.team_members}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectListSection;
