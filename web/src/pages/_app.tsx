import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "mobx-react";
import { store } from "../stores/RootStateContext";

function MyApp({ Component, pageProps }) {
    return (
        <Provider {...store}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
