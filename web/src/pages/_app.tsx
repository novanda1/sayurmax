import { ChakraProvider } from "@chakra-ui/react";
import { configure } from "mobx";
import { RootStateProvider } from "../stores/StoreProvider";
import theme from "../theme";

configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: false,
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <RootStateProvider {...pageProps}></RootStateProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
