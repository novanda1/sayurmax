import { ApolloQueryResult } from "@apollo/client";
import { action, makeAutoObservable } from "mobx";
import { initializeApollo } from "../../lib/apollo/apollo";
import { GetUserDocument, UserType } from "../../lib/generated/graphql";

export class UserStore {
    currentUser: UserType;

    constructor() {
        makeAutoObservable(this);
    }

    pullUser(
        id?: number,
        user?: UserType
    ): Promise<ApolloQueryResult<UserType>> | UserType {
        const client = initializeApollo();

        if (user) return user;

        client
            .query<UserType>({
                query: GetUserDocument,
                variables: {
                    pk: id,
                },
            })
            .then(
                action(({ data }) => {
                    this.currentUser = data;
                })
            );
    }
}

export default new UserStore();
