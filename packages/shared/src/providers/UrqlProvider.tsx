import React, { ReactElement } from "react";
import { createClient, Provider } from "urql";

interface Props {
    children: React.ReactNode;
}

const client = createClient({
    url: "http://localhost:9090/graphql/",
    fetchOptions: () => {
        return {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NzI1MTQ3MC1lY2E5LTRlYWUtOTAwOS03ZThkOTYzNjFmNTciLCJwaG9uZSI6Iis2Mjg1MTU1MTE0NzQ1In0.hSwmDmWP79DyXUwwEU50f1_7OyReWqcL_T3G7CT4VSY",
            },
        };
    },
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
