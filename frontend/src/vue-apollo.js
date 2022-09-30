import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";


const httpLink = createHttpLink({
    uri: import.meta.env.VUE_APP_GRAPHQL_URL || "http://localhost:1338/graphql",
});

// Cache Implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

export default apolloClient;