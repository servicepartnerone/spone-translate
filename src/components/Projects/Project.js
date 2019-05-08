import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@spone/ui';

import Segment from './components/Segment/Segment';

import './Project.scss';

const Project = () => (
  <div className="project-page">
    <div className="page-header">
      <Link to="/">
        <Button className="back-btn">
          <span className="icon icon-arrow-right" />
          BACK
        </Button>
      </Link>

      <h1 className="page-title">
        <span className="icon icon-filter" />
        PWI
      </h1>
    </div>

    <div className="page-content">
      <Segment language="en" />
      <Segment language="de" />
    </div>
  </div>
);

export default Project;
