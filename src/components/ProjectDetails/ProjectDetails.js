import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@spone/ui';

import Translations from './components/Translations';

import './ProjectDetails.scss';

const ProjectDetails = () => (
  <div className="project-details-page">
    <div className="page-header">
      <Link to="/projects/cwi">
        <Button className="back-btn">
          <span className="icon icon-arrow-right" />
          BACK
        </Button>
      </Link>

      <h1 className="page-title">
        <span className="icon icon-edit" />
        PWI [DE] - Login
        <span className="date">Updated 03/05/2019 at 15:02</span>
      </h1>

      <Button className="add-btn">
        <span className="icon icon-plus" />
        ADD KEY
      </Button>
    </div>

    <div className="page-content">
      <Translations />
    </div>
  </div>
);

export default ProjectDetails;
