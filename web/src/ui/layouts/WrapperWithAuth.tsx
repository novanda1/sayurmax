import { AuthStore } from "@/stores/auth";
import { CommonStore } from "@/stores/common";
import { observer } from "mobx-react";
import React from "react";
import Login from "../pages/auth/Login";

type WrapperWithAuthProps = {
    commonStore: CommonStore;
    authStore: AuthStore;
};

const WrapperWithAuth: React.FC<WrapperWithAuthProps> = observer(
    ({ commonStore, authStore, children }) => {
        const { token } = commonStore;

        if (token) return <>{children}</>;
        else return <Login authStore={authStore} commonStore={commonStore} />;
    }
);

export default WrapperWithAuth;
