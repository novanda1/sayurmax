import { HttpLink } from "@apollo/client/link/http";

export function createHttpLink() {
    return new HttpLink({
        uri: "http://localhost:9090/graphql/",
    });
}
