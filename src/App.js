import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Project from './components/Projects/Project';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
// import FeedPage from './components/FeedPage';
import DraftsPage from './components/DraftsPage';
import CreatePage from './components/CreatePage';
import DetailPage from './components/DetailPage';
import Settings from './components/Settings/Settings';
import Layout from './components/Common/Layout/Layout';

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects/:id" exact component={Project} />
        <Route path="/projects/:id/:language/:namespace" exact component={ProjectDetails} />
        <Route path="/drafts" component={DraftsPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/settings" component={Settings} />
        <Route path="/post/:id" component={DetailPage} />
      </Switch>
    </Layout>
  </>
);

export default App;
