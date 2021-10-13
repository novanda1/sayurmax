import { initializeApollo } from "lib/apollo/apollo";
import {
    CreateUserDto,
    FieldError,
    LoginDocument,
    LoginMutation,
    LoginMutationVariables,
    RegisterDocument,
    RegisterMutation,
    RegisterMutationVariables,
} from "lib/generated/graphql";
import { makeAutoObservable, runInAction } from "mobx";

export class AuthStore {
    isProgress: boolean = false;
    errors: Array<FieldError> = [];
    values: CreateUserDto = {
        username: "",
        password: "",
    };

    constructor() {
        makeAutoObservable(this);
    }

    setUsername(username: string) {
        runInAction(() => {
            this.values.username = username;
        });
    }

    setPassword(password: string) {
        runInAction(() => {
            this.values.password = password;
        });
    }

    async login(): Promise<LoginMutation> {
        const client = initializeApollo();
        this.isProgress = true;

        return client
            .mutate<LoginMutation>({
                mutation: LoginDocument,
                variables: {
                    options: {
                        username: this.values.username,
                        password: this.values.password,
                    },
                } as LoginMutationVariables,
            })
            .then(({ data }) => {
                if (data.login.error) {
                    runInAction(() => {
                        this.errors = data.login.error;
                    });
                }

                return data;
            })

            .finally(() => {
                this.isProgress = false;
            });
    }

    async register(): Promise<RegisterMutation> {
        const client = initializeApollo();
        this.isProgress = true;
        this.errors = undefined;

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
            .then(({ data }) => {
                if (data?.register.error) {
                    this.errors = data.register.error;
                }

                return data;
            })
            .finally(() => (this.isProgress = false));
    }
}

export default new AuthStore();
