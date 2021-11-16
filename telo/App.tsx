import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { config } from "./src/config/theme";
import { MainNavigation } from "./src/navigations/MainNavigation";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@sayurmax/timun/src/apollo-client";

export const theme = extendTheme({ config });
const client = createApolloClient();

export default function App() {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApolloProvider>
    </NativeBaseProvider>
  );
}
