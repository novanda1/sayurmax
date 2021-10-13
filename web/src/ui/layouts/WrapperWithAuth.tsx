import { AuthStore } from "@/stores/auth";
import { CommonStore } from "@/stores/common";
import { UserStore } from "@/stores/user";
import { observer } from "mobx-react";
import React from "react";
import Register from "../pages/auth/Register";

type WrapperWithAuthProps = {
    commonStore: CommonStore;
    authStore: AuthStore;
    userStore: UserStore;
};

const WrapperWithAuth: React.FC<WrapperWithAuthProps> = observer(
    ({ commonStore, authStore, userStore, children }) => {
        const { token } = commonStore;

        if (token) return <>{children}</>;
        else
            return (
                <Register
                    authStore={authStore}
                    commonStore={commonStore}
                    userStore={userStore}
                />
            );
    }
);

export default WrapperWithAuth;
