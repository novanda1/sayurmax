import { ChakraProvider } from "@chakra-ui/react";
import { RootStateProvider } from "../stores/RootStateContext";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <RootStateProvider>
                <Component {...pageProps} />
            </RootStateProvider>
        </ChakraProvider>
    );
}

export default MyApp;
