import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { config } from "./src/config/theme";
import { MainNavigation } from "./src/navigations/MainNavigation";
import UrqlProvider from "./src/providers/UrqlProvider";
import { halo, useTest } from "@sayurmax/shared";

const theme = extendTheme({ config });

export default function App() {
  useEffect(() => {
    console.log("just normal day" + halo);
  }, []);

  const test = useTest();

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
