import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "mobx-react";
import { store } from "../stores/RootStateContext";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Provider {...store}>
                <Component {...pageProps} />
            </Provider>
        </ChakraProvider>
    );
}

export default MyApp;
