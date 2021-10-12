import { Observer } from "mobx-react-lite";
import React from "react";
import { useRootStore } from "../stores/RootStateContext";
import Login from "../ui/pages/Login";

export default function Home() {
    const rootStore = useRootStore();

    return (
        <Observer>
            {() => (
                <div>
                    <Login
                        authStore={rootStore.authStore}
                        commonStore={rootStore.commonStore}
                    />
                </div>
            )}
        </Observer>
    );
}
