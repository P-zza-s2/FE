import { useEffect, useState } from 'react';
import './ProjectCard.scss';
import { useNavigate } from 'react-router-dom';
import { getProjectDetail } from '../../api/project';

export function ProjectCard({ id, status, name, desc, mem }) {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`../project-about/${id}`)}
    >
      <div className="elements">
        <div className="pj-header">
          <span
            className={`${status === '완료' && 'done'} ${
              status === '중단' && 'stop'
            }`}
          >
            {status}
          </span>
          <div className="pj-title">{name} </div>
        </div>
        <p className="pj-desc">{desc}</p>
        <div className="position-container">
          {mem.map((each, i) => (
            <span
              key={i}
              className={`position ${
                each.participants === each.recruitment_target && 'over'
              }`}
            >
              {each.role} {each.participants} / {each.recruitment_target}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
