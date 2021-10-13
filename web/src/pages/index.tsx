import React from "react";
import WrapperWithAuth from "src/ui/layouts/WrapperWithAuth";
import { Main } from "src/ui/pages/Main";
import AuthStore from "../stores/auth";
import CommonStore from "../stores/common";
import Login from "../ui/pages/auth/Login";

export default function Home() {
    return (
        <WrapperWithAuth commonStore={CommonStore} authStore={AuthStore}>
            <Main />
        </WrapperWithAuth>
    );
}
