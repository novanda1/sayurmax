import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { config } from "./src/config/theme";
import { MainNavigation } from "./src/navigations/MainNavigation";
import FontProvider from "./src/providers/FontProvider";
import UrqlProvider from "./src/providers/UrqlProvider";

export const theme = extendTheme({ config });

export default function App() {
    return (
        <FontProvider>
            <NativeBaseProvider theme={theme}>
                <UrqlProvider>
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <MainNavigation />
                        </NavigationContainer>
                    </SafeAreaProvider>
                </UrqlProvider>
            </NativeBaseProvider>
        </FontProvider>
    );
}
