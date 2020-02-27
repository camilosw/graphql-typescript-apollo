import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import Main from './components/Main';
import './index.css';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
