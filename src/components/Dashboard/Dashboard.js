import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import ProjectsList from './components/ProjectsList/ProjectsList';

import './Dashboard.scss';

const Dashboard = ({ projectsQuery }) => (
  <div className="dashboard-page">
    <div className="page-header">
      <h1 className="page-title">
        <span className="icon icon-dashboard" />
        Dashboard
      </h1>
    </div>

    <div className="page-content">
      {projectsQuery.error && <div>Error...</div>}
      {projectsQuery.loading && <div>Ladoing...</div>}

      {projectsQuery.projects && (
        <div className="left-column">
          <div className="section-projects">
            <ProjectsList projects={projectsQuery.projects} />
          </div>
        </div>
      )}
    </div>
  </div>
);

const GET_PROJECTS = gql`
  query ProjectsQuery {
    projects {
      id
      project_name
    }
  }
`;

export default graphql(GET_PROJECTS, {
  name: 'projectsQuery',
  options: {
    fetchPolicy: 'network-only'
  }
})(Dashboard);
