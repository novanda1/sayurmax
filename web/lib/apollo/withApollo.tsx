import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import { IncomingHttpHeaders } from "http";
import { withApollo } from "next-apollo";

const URL = process.env.NEXT_PUBLIC_GROCERY_GRAPHQL_URL;

const createApolloClient = (headers: IncomingHttpHeaders | null = null) => {
    // isomorphic fetch for passing the cookies along with each GraphQL request
    const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
        return fetch(url, {
            ...init,
            headers: {
                ...init.headers,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers":
                    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                // here we pass the cookie along for each request
                Cookie: headers?.cookie ?? "",
            },
        }).then((response) => response);
    };

    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: ApolloLink.from([
            new HttpLink({
                uri: URL,
                credentials: "same-origin",
                // fetch: enhancedFetch,
            }),
        ]),
        cache: new InMemoryCache({}),
    });
};

export default withApollo(createApolloClient());
