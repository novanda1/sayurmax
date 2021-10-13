import { RootStateContextValue } from "@/stores/StoreProvider";
import withApollo from "lib/apollo/withApollo";
import React from "react";
import WrapperWithAuth from "src/ui/layouts/WrapperWithAuth";
import { Main } from "src/ui/pages/Main";

const Home = () => {
    return (
        <WrapperWithAuth {...RootStateContextValue}>
            <Main />
        </WrapperWithAuth>
    );
};

export default withApollo()(Home);
