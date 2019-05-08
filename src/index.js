import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './App';

import './index.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
  // cacheRedirects: {
  //   Query: {
  //     project: (_, { id }, { getCacheKey }) => getCacheKey({ id, __typename: 'Project' })
  //   }
  // }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
