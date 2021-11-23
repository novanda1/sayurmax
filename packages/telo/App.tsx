import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { config } from "./src/config/theme";
import { UrqlProvider } from "@sayurmax/shared";
import { RootNavigation } from "./src/navigations/RootNavigation";

const theme = extendTheme({ config });

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <UrqlProvider>
                <NavigationContainer>
                    <RootNavigation />
                </NavigationContainer>
            </UrqlProvider>
        </NativeBaseProvider>
    );
}
