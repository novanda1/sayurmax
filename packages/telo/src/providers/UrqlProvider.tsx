import { client as urqlClient } from "@sayurmax/timun";

import React, { ReactElement } from "react";
import { createClient, Provider } from "urql";

interface Props {
    children: React.ReactNode;
}

const client = createClient({
    url: "https://sayurmax.herokuapp.com/graphql/",
    fetchOptions: () => {
        return {
            headers: {
                authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNDUwZDNiYS1iZmZhLTRlMDgtYWU3NC05OTZiN2NjNWU2YTEiLCJwaG9uZSI6Iis2Mjg1MTU1MTE0NzQ1IiwiZXhwIjoxNjM3ODE2NDk1fQ.3rp55efNo8d7pjWnbCSeqE29jnMWdrl6v5fSlGB9EAs",
            },
        };
    },
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
