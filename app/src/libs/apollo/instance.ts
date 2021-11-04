import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { cordovaHttpFetchImpl } from "../fetcher";
import VueApollo from "vue-apollo";

const httpLink = createHttpLink({
    uri: "http://localhost:9090/graphql/",
    fetch: cordovaHttpFetchImpl,
   
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});
