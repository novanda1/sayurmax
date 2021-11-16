import { HttpLink } from "@apollo/client/link/http";

export function createHttpLink() {
    return new HttpLink({
        uri: "http://localhost:9090/graphql/",
        headers: {
            authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNDUwZDNiYS1iZmZhLTRlMDgtYWU3NC05OTZiN2NjNWU2YTEiLCJwaG9uZSI6Iis2Mjg1MTU1MTE0NzQ1IiwiZXhwIjoxNjM3MzA3MTQ4fQ.x52lrBxqd1JKbUI3WC5Ld4As88EaUD0QrRG0akDXlZk",
        },
    });
}
