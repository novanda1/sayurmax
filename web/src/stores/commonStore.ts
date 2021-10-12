import { action, observable, reaction } from "mobx";
import isServer from "../../utils/isServer";
import { LOCALSTORAGE_TOKEN_NAME } from "../shared";

class CommonStore {
    @observable appName = "Grocery";
    @observable token = !isServer
        ? window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)
        : null;
    @observable appLoaded = false;

    constructor() {
        if (!isServer)
            reaction(
                () => this.token,
                (token) => {
                    if (token) {
                        window.localStorage.setItem(
                            LOCALSTORAGE_TOKEN_NAME,
                            token
                        );
                    } else {
                        window.localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
                    }
                }
            );
    }

    @action setToken(token: string) {
        this.token = token;
    }

    @action setAppLoaded() {
        this.appLoaded = true;
    }
}

export default CommonStore;
