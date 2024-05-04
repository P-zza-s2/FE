function ProjectListSection() {
  return (
    <div className="project-section">
      <ul>
        {filteredData.map((item) => (
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
