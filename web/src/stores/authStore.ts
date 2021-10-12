import { action, observable } from "mobx";
import { initializeApollo } from "../../lib/apollo/apollo";
import {
    CreateUserDto,
    FieldError,
    LoginDocument,
    LoginMutationVariables,
    RegisterDocument,
    RegisterMutation,
    RegisterMutationResult,
    RegisterMutationVariables,
} from "../../lib/generated/graphql";
import { store } from "./RootStateContext";

class AuthStore {
    @observable inProgress = false;
    @observable errors: FieldError[] = undefined;

    @observable values: CreateUserDto = {
        username: "",
        password: "",
    };

    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setPassword(password) {
        this.values.password = password;
    }

    @action reset() {
        this.values.username = "";
        this.values.password = "";
    }

    @action login() {
        this.inProgress = true;
        this.errors = undefined;

        const client = initializeApollo();

        return client
            .mutate({
                mutation: LoginDocument,
                variables: {
                    options: {
                        username: this.values.username,
                        password: this.values.password,
                    },
                } as LoginMutationVariables,
            })
            .then(
                action(({ data }) => {
                    if (data.login.error) {
                        this.errors = data.login.error;
                        throw this.errors;
                    }

                    store.commonStore.setToken(data.register.token);
                    store.userStore.pullUser(null, data.login.user);
                })
            )
            .finally(action(() => (this.inProgress = false)));
    }

    @action async register() {
        this.inProgress = true;
        this.errors = undefined;

        const client = initializeApollo();

        return client
            .mutate<RegisterMutation>({
                mutation: RegisterDocument,
                variables: {
                    options: {
                        username: this.values.username,
                        password: this.values.password,
                    },
                } as RegisterMutationVariables,
            })
            .then(
                action(({ data }) => {
                    console.log(`data after register`, data);
                    if (data?.register.error) {
                        this.errors = data.register.error;
                        throw this.errors;
                    }

                    store.commonStore.setToken(data.register.token);
                    store.userStore.pullUser(null, data.register.user);
                })
            )
            .finally(action(() => (this.inProgress = false)));
    }

    @action logout() {
        store.commonStore.setToken(undefined);
        store.userStore.forgetUser();
        return Promise.resolve();
    }
}

export default AuthStore;
