import React from "react";
import { AuthStore } from "./auth";
import { CommonStore } from "./common";
import { UserStore } from "./user";

type RootStateContextValueType = {
    commonStore: CommonStore;
    authStore: AuthStore;
    userStore: UserStore;
};

export const RootStateContextValue: RootStateContextValueType = {
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
    userStore: new UserStore(),
};

const RootStateContext = React.createContext<RootStateContextValueType>(
    {} as RootStateContextValueType
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RootStateContext.Provider value={RootStateContextValue}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext);
