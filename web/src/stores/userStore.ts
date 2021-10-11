import { action, observable } from "mobx";
import { initializeApollo } from "../../lib/apollo/apollo";
import { GetUserDocument, UserType } from "../../lib/generated/graphql";

class UserStore {
    @observable currentUser: UserType;
    @observable loadingUser: boolean;
    @observable updatingUser: boolean;

    @action pullUser(id?: number, user?: UserType) {
        if (user) return user;

        const client = initializeApollo();

        this.loadingUser = true;

        return client
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
            )
            .finally(
                action(() => {
                    this.loadingUser = false;
                })
            );
    }

    // @action updateUser(newUser) {
    //     const client = initializeApollo();

    //     this.updatingUser = true;

    //     return client.query({quer})
    // }

    @action forgetUser() {
        this.currentUser = undefined;
    }
}

export default new UserStore();
