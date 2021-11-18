import { createClient } from "urql";

const getToken = () => localStorage?.getItem("tkn");

export const client = createClient({
    url: "http://localhost:9090/graphql/",
    fetchOptions: () => {
        const token = getToken();
        return {
            headers: {
                authorization: token ? "Bearer " + token : "Bearer ",
            },
        };
    },
});
