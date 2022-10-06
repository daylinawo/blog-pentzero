import { createApp } from './app';
import type { PageContextClient } from './types';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';

export { render };

async function render(pageContext: PageContextClient) {
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:1338/graphql',
      fetch,
    }),
    cache: new InMemoryCache().restore(pageContext.apolloInitialState),
    connectToDevTools: true,
  });

  const app = createApp(pageContext, apolloClient);
  app.mount('#app');
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
