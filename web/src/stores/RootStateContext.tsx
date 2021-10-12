import { Provider } from "mobx-react";
import React from "react";
import AuthStore from "./authStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

// enableStaticRendering(isServer);

type RootStateContextValue = {
    commonStore: CommonStore;
    authStore: AuthStore;
    userStore: UserStore;
};

export const store: RootStateContextValue = {
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
    userStore: new UserStore(),
};

const RootStateContext = React.createContext<RootStateContextValue>(
    {} as RootStateContextValue
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RootStateContext.Provider value={store}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext);
