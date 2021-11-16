import {
  Center,
  Code,
  extendTheme,
  Heading,
  HStack,
  Link,
  NativeBaseProvider,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./src/navigations/MainNavigation";
import Expo from "expo";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  fontConfig: {
    Roboto: {
      100: {
        normal: Roboto_300Light,
        italic: Roboto_300Light_Italic,
      },
      200: {
        normal: Roboto_300Light,
        italic: Roboto_300Light_Italic,
      },
      300: {
        normal: Roboto_300Light,
        italic: Roboto_300Light_Italic,
      },
      400: {
        normal: Roboto_400Regular,
        italic: Roboto_400Regular_Italic,
      },
      500: {
        normal: Roboto_500Medium,
        italic: Roboto_500Medium_Italic,
      },
      700: {
        normal: Roboto_700Bold,
        italic: Roboto_700Bold_Italic,
      },
    },
  },

  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
};

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
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
