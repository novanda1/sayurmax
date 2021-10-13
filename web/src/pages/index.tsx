import { RootStateContextValue } from "@/stores/StoreProvider";
import withApollo from "lib/apollo/withApollo";
import React from "react";
import { MainLayout } from "src/ui/layouts/MainLayout";
import WrapperWithAuth from "src/ui/layouts/WrapperWithAuth";
import { Main } from "src/ui/pages/Main";

const Home = () => {
    return (
        <MainLayout {...RootStateContextValue}>
            <Main />
        </MainLayout>
    );
};

export default withApollo()(Home);
