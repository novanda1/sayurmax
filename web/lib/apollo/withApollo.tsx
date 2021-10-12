import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import { withApollo } from "next-apollo";
import { IncomingHttpHeaders } from "http";
import { config } from "dotenv";
import isProd from "../../utils/isProd";

config({ path: isProd ? ".env" : ".env.dev" });

const createApolloClient = (headers: IncomingHttpHeaders | null = null) => {
    // isomorphic fetch for passing the cookies along with each GraphQL request
    const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
        return fetch(url, {
            ...init,
            headers: {
                ...init.headers,
                "Access-Control-Allow-Origin": "*",
                // here we pass the cookie along for each request
                Cookie: headers?.cookie ?? "",
            },
        }).then((response) => response);
    };

    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: ApolloLink.from([
            new HttpLink({
                uri: process.env.GROCERY_GRAPHQL_URL,
                credentials: "same-origin",
                fetch: enhancedFetch,
            }),
        ]),
        cache: new InMemoryCache({}),
    });
};

export default withApollo(createApolloClient());