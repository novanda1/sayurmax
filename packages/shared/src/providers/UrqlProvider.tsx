import React, { ReactElement } from "react";
import {
    cacheExchange,
    createClient,
    dedupExchange,
    errorExchange,
    fetchExchange,
    makeOperation,
    Provider,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import * as Store from "expo-secure-store";

interface Props {
    children: React.ReactNode;
}

const client = createClient({
    url: "https://sayurmax.herokuapp.com/graphql/",
    exchanges: [
        dedupExchange,
        cacheExchange,
        fetchExchange,
        errorExchange({
            onError: (error) => {
                const isAuthError = error.graphQLErrors.some(
                    (e) => e.message === "User is not authenticated"
                );

                if (isAuthError) {
                    // logout();
                }
            },
        }),
        authExchange({
            getAuth: async ({ authState }) => {
                if (!authState) {
                    // const token = await Store.getItemAsync("@toum/token") ;
                    const token = localStorage.getItem("token") ;

                    if (token) return { token };
                    else return null;
                }

                // logout();

                return null;
            },
            addAuthToOperation: ({
                authState,
                operation,
            }: {
                authState: { token: string };
                operation: any;
            }) => {
                if (!authState || !authState.token) {
                    return operation;
                }

                const fetchOptions =
                    typeof operation.context.fetchOptions === "function"
                        ? operation.context.fetchOptions()
                        : operation.context.fetchOptions || {};

                return makeOperation(operation.kind, operation, {
                    ...operation.context,
                    fetchOptions: {
                        ...fetchOptions,
                        headers: {
                            ...fetchOptions.headers,
                            Authorization: `Bearer ${authState.token}`,
                        },
                    },
                });
            },
            didAuthError: ({ error }) => {
                return error.graphQLErrors.some(
                    (e) => e.message === "User is not authenticated"
                );
            },
            willAuthError: ({ authState }) => {
                if (!authState) return true;
                return false;
            },
        }),
    ],
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
