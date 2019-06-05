import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button } from '@spone/ui';

import Information from './components/Information/Information';
import Namespaces from './components/Namespaces/Namespaces';
import Languages from 'components/Languages/Languages';
import Users from './components/Users/Users';

import './Settings.scss';

const Settings = ({ loading, userSettings }) => {
  if (loading) return <div>Loading</div>;

  return (
    <div className="settings-page">
      {console.log(loading, userSettings)}
      <div className="page-header">
        <Link to="/">
          <Button className="back-btn">
            <span className="icon icon-arrow-right" />
            BACK
          </Button>
        </Link>

        <h1 className="page-title">
          <span className="icon icon-settings" />
          Settings
        </h1>
      </div>

      <div className="page-content">
        <div className="left-column">
          <div className="section-info">
            <Information />
          </div>

          <div className="section-users">
            <Users />
          </div>
        </div>

        <div className="right-column">
          <div className="section-namespaces">
            <Namespaces />
          </div>

          <div className="section-languages">
            <Languages />
          </div>
        </div>
      </div>
    </div>
  );
};

const GET_USER_SETTINGS = gql`
  fragment UserSettings on User {
    id
    email
    first_name
    projects {
      id
      languages {
        id
        namespaces {
          id
        }
      }
    }
  }

  query UserSettingsQuery {
    userSettings {
      ...UserSettings
    }
  }
`;

export default graphql(GET_USER_SETTINGS, {
  options: {
    fetchPolicy: 'network-only'
  },
  props: ({ data: { loading, userSettings } }) => ({
    loading,
    userSettings
  })
})(Settings);
