import { client as urqlClient } from "@sayurmax/timun";

import React, { ReactElement } from "react";
import { createClient, Provider } from "urql";

interface Props {
    children: React.ReactNode;
}

const client = createClient({
    url: "https://sayurmax.herokuapp.com/graphql/",
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
