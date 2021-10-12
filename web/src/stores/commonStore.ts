import { action, observable, reaction } from "mobx";
import isServer from "../../utils/isServer";
import { LOCALSTORAGE_TOKEN_NAME } from "../shared";

class CommonStore {
    @observable appName = "Grocery";
    @observable token: string = !isServer
        ? window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)
        : "";
    @observable appLoaded = false;

    constructor() {
        reaction(
            () => this.token,
            (token) => {
                console.log("token change")
                if (!isServer)
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
        console.log(`token`, token)
    }

    @action setAppLoaded() {
        this.appLoaded = true;
    }
}

export default CommonStore;
