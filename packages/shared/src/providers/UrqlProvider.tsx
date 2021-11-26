import React, { ReactElement } from "react";
import {
    cacheExchange,
    createClient,
    dedupExchange,
    fetchExchange,
    makeOperation,
    Provider,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    children: React.ReactNode;
}

const client = createClient({
    url: "https://sayurmax.herokuapp.com/graphql/",
    exchanges: [
        dedupExchange,
        cacheExchange,
        authExchange({
            getAuth: async ({ authState }) => {
                if (!authState) {
                    const token = await AsyncStorage.getItem("@tuman/token");
                    if (token) {
                        return { token };
                    }
                    return null;
                }

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
                return error.graphQLErrors.some((e) =>
                    e.message.includes("not authenticated")
                );
            },
            willAuthError: ({ authState }) => {
                if (!authState) return true;
                return false;
            },
        }),
        fetchExchange,
    ],
});

function UrqlProvider({ children }: Props): ReactElement {
    return <Provider value={client}>{children}</Provider>;
}

export default UrqlProvider;
