import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { config } from "./src/config/theme";
import { MainNavigation } from "./src/navigations/MainNavigation";

// extend the theme
export const theme = extendTheme({ config });
export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Light": Roboto_300Light,
    "Roboto-LightItalic": Roboto_300Light_Italic,
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Italic": Roboto_400Regular_Italic,
    "Roboto-Medium": Roboto_500Medium,
    "Roboto-MediumItalic": Roboto_500Medium_Italic,
    "Roboto-Bold": Roboto_700Bold,
    "Roboto-BoldItalic": Roboto_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <>loading..</>;
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
