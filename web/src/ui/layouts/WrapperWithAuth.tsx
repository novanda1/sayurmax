import { AuthStore } from "@/stores/auth";
import { CommonStore } from "@/stores/common";
import { UserStore } from "@/stores/user";
import { useVerifyJwtQuery } from "lib/generated/graphql";
import { observer } from "mobx-react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

type WrapperWithAuthProps = {
    commonStore: CommonStore;
    authStore: AuthStore;
    userStore: UserStore;
};

const WrapperWithAuth: React.FC<WrapperWithAuthProps> = observer(
    ({ commonStore, authStore, userStore, children }) => {
        const { push } = useRouter();
        const { token } = commonStore;
        const { data, loading, error } = useVerifyJwtQuery({
            skip: !!token,
            variables: {
                token,
            },
        });

        useEffect(() => {
            if (!token || error) push("/login");
        }, [error, token]);

        if (loading) return <div>authenticating...</div>;
        if (data?.verifyJwt) return <>{children}</>;
        else return <></>;
    }
);

export default WrapperWithAuth;
