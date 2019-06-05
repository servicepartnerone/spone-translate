import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '@spone/ui';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';
import { format } from 'date-fns';

// import Segment from '../Segment/Segment';
import Languages from 'components/Languages/Languages';
import { LANGUAGE_FRAGMENT } from 'fragments';

import './Project.scss';

const Project = ({ data: { loading, project } }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <div className="project-page">
      <div className="page-header">
        <Link to="/">
          <Button className="back-btn">
            <span className="icon icon-arrow-right" />
            BACK
          </Button>
        </Link>

        <h1 className="page-title">
          <span className="icon icon-edit" />
          {project.name}
          {project.updatedAt && (
            <span className="date">Updated {format(new Date(project.updatedAt), "dd.MM.yyyy 'at' HH:mm")}</span>
          )}
        </h1>
      </div>

      <div className="page-content">
        <Languages languages={project.languages} />
        {/* {project.languages &&
          project.languages.length > 0 &&
          project.languages.map(lang => <Segment language={lang} />)} */}
      </div>
    </div>
  );
};

const GET_PROJECT = gql`
  query ProjectQuery($id: String!) {
    project(id: $id) {
      id
      name
      languages {
        ...languageFragment
      }
    }
  }
  ${LANGUAGE_FRAGMENT}
`;

export default compose(
  graphql(GET_PROJECT, {
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  withRouter
)(Project);
