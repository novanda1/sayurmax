import { makeAutoObservable, reaction } from "mobx";
import isServer from "@/utils/isServer";
import { LOCALSTORAGE_TOKEN_NAME } from "../shared";

export class CommonStore {
    appLoaded: boolean = false;
    appName: string = "Grocery";
    token: string = isServer
        ? ""
        : localStorage.getItem(LOCALSTORAGE_TOKEN_NAME);

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            (token) => {
                if (!isServer)
                    if (token)
                        localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, token);
                    else localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
            }
        );
    }

    setToken(token: string) {
        this.token = token;
    }

    setAppLoaded(loaded: boolean) {
        this.appLoaded = loaded;
    }
}

export default new CommonStore();
