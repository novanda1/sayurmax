import { action, observable, reaction } from "mobx";
import isServer from "../../utils/isServer";
import { LOCALSTORAGE_TOKEN_NAME } from "../shared";

class CommonStore {
    @observable appName = "Grocery";
    @observable token: string = !isServer
        ? window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)
        : "";
    @observable appLoaded = false;

    @action setToken(token: string) {
        this.token = token;
    }

    @action setAppLoaded() {
        this.appLoaded = true;
    }
}

export default CommonStore;
