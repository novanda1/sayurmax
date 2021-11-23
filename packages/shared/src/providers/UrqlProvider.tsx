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
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwidXNlcm5hbWUiOiJpbWFzaG9wcGVyIiwiZXhwIjoxNjM3OTEyMDU2fQ.sMnk2Jt92I_GXL7zlSwNf9RyBFU6PS1zSMHZE4tetAg",
            },
        };
    },
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
