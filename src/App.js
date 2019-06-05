import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AUTH_TOKEN } from './constants';
import { isTokenExpired } from './utils/jwtHelper';
import Dashboard from 'components/Dashboard/Dashboard';
import Project from 'components/Projects/components/Project/Project';
// import ProjectDetails from 'components/ProjectDetails/ProjectDetails';
import Settings from 'components/Settings/Settings';
import Layout from 'components/Common/Layout/Layout';
import Login from 'components/Login/Login';
import PageNotFound from 'components/PageNotFound/PageNotFound';

import 'react-toastify/dist/ReactToastify.min.css';

// Configure toast container
toast.configure({
  autoClose: 5000,
  draggable: false,
  hideProgressBar: true,
  pauseOnHover: false
});

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return token ? <Route {...rest} render={matchProps => <Component {...matchProps} />} /> : <Redirect to="/login" />;
};

const App = ({ token: initialToken }) => {
  const [token, setToken] = useState(initialToken);

  const bootStrapData = () => {
    try {
      const token = localStorage.getItem(AUTH_TOKEN);
      if (token !== null && token !== undefined) {
        const expired = isTokenExpired(token);
        if (!expired) {
          setToken(token);
        } else {
          localStorage.removeItem(AUTH_TOKEN);
          setToken(null);
        }
      }
    } catch (e) {
      console.log('Token validation error');
    }
  };

  useEffect(() => {
    bootStrapData();
  }, []);

  const refreshTokenFn = (data = {}) => {
    const token = data[AUTH_TOKEN];

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN);
    }

    setToken(data[AUTH_TOKEN]);
  };

  return (
    <>
      <Layout>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} token={token} />
          <ProtectedRoute path="/projects/:id" exact component={Project} token={token} />
          {/* <ProtectedRoute path="/projects/:id/:language/:namespace" exact component={ProjectDetails} token={token} /> */}
          <ProtectedRoute path="/settings" component={Settings} token={token} />
          <Route path="/login" render={props => <Login refreshTokenFn={refreshTokenFn} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
