import React from "react";
import AuthStore from "../stores/auth";
import CommonStore from "../stores/common";
import Login from "../ui/pages/auth/Login";

export default function Home() {
    return <Login commonStore={CommonStore} authStore={AuthStore} />;
}
