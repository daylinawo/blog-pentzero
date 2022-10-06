import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';

import fetch from 'cross-fetch';

// Cache Implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:1338/graphql',
    fetch,
  }),
});

export default apolloClient;
