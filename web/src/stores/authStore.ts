import { action, observable } from "mobx";
import {
    CreateUserDto,
    FieldError,
    useLoginMutation,
    useRegisterMutation,
} from "../../lib/generated/graphql";
import { store } from "./RootStateContext";

class AuthStore {
    @observable inProgress = false;
    @observable errors: FieldError[] = undefined;

    @observable values: CreateUserDto = {
        username: "",
        displayName: "",
        email: "",
        phone: "",
        password: "",
    };

    @action setUsername(username: string) {
        this.values.username = username;
    }

    @action setDisplayName(v: string) {
        this.values.displayName = v;
    }

    @action setEmail(email: string) {
        this.values.email = email;
    }

    @action setPassword(password) {
        this.values.password = password;
    }

    @action setPhone(v: string) {
        this.values.phone = v;
    }

    @action reset() {
        this.values.username = "";
        this.values.email = "";
        this.values.password = "";
    }

    @action login() {
        this.inProgress = true;
        this.errors = undefined;

        const [loginMutation] = useLoginMutation();

        return loginMutation({
            variables: {
                options: {
                    email: this.values.email,
                    password: this.values.password,
                },
            },
        })
            .then(
                action(({ data }) => {
                    if (data.login.error) {
                        this.errors = data.login.error;
                        throw this.errors;
                    }

                    store.userStore.pullUser(null, data.login.user);
                })
            )
            .finally(action(() => (this.inProgress = false)));
    }

    @action async register() {
        this.inProgress = true;
        this.errors = undefined;

        const [registration] = useRegisterMutation();

        return registration({
            variables: { options: this.values },
        })
            .then(
                action(({ data }) => {
                    if (data.register.error) {
                        this.errors = data.register.error;
                        return this.errors;
                    }

                    store.commonStore.setToken(data.register.token);
                    store.userStore.pullUser(null, data.register.user);
                })
            )
            .finally(
                action(() => {
                    this.inProgress = false;
                })
            );
    }

    @action logout() {
        store.commonStore.setToken(undefined);
        store.userStore.forgetUser();
        return Promise.resolve();
    }
}

export default AuthStore;
