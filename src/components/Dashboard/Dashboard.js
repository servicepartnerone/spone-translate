import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import Projects from 'components/Projects/Projects';

import './Dashboard.scss';

const Dashboard = ({ projectsQuery: { projects } }) => (
  <div className="dashboard-page">
    <div className="page-header">
      <h1 className="page-title">
        <span className="icon icon-dashboard" />
        Dashboard
      </h1>
    </div>

    <div className="page-content">
      {projects && (
        <div className="left-column">
          <div className="section-projects">
            <Projects projects={projects} />
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
      name
    }
  }
`;

export default graphql(GET_PROJECTS, {
  name: 'projectsQuery',
  options: {
    fetchPolicy: 'network-only'
  }
})(Dashboard);
