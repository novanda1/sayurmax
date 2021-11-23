import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { config } from "./src/config/theme";
import { MainNavigation } from "./src/navigations/MainNavigation";
import { UrqlProvider } from "@sayurmax/shared";

const theme = extendTheme({ config });

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <UrqlProvider>
                <NavigationContainer>
                    <MainNavigation />
                </NavigationContainer>
            </UrqlProvider>
        </NativeBaseProvider>
    );
}
