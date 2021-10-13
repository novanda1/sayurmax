import { RootStateContextValue } from "@/stores/StoreProvider";
import React from "react";
import WrapperWithAuth from "src/ui/layouts/WrapperWithAuth";
import { Main } from "src/ui/pages/Main";

export default function Home() {
    return (
        <WrapperWithAuth {...RootStateContextValue}>
            <Main />
        </WrapperWithAuth>
    );
}
