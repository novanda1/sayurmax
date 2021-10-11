import React from "react";
import AuthStore from "./authStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

type RootStateContextValue = {
    commonStore: typeof CommonStore;
    authStore: typeof AuthStore;
    userStore: typeof UserStore;
};

const RootStateContext = React.createContext<RootStateContextValue>(
    {} as RootStateContextValue
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    return (
        <RootStateContext.Provider
            value={{
                commonStore: CommonStore,
                authStore: AuthStore,
                userStore: UserStore,
            }}
        >
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext);
