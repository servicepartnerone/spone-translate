import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from '@spone/ui';

import CreateProject from './components/CreateProject/CreateProject';

import './Projects.scss';

const Projects = ({ projects, createProject }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form projects-form">
      <div className="section-form-title">
        Projects
        <Button className="btn-add" onClick={() => setShowModal(true)}>
          <span className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields projects-list">
        {projects.map(project => (
          <Link className="project" to={`projects/${project.id}`} key={project.name}>
            <div className="name">{project.name}</div>
            <div className="keys">55/55</div>
          </Link>
        ))}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add project">
        <CreateProject closeModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Projects;
