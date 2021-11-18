import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";

const FontProvider: React.FC = ({ children }) => {
  let [fontsLoaded, error] = useFonts({
    "Roboto-Light": Roboto_300Light,
    "Roboto-LightItalic": Roboto_300Light_Italic,
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Italic": Roboto_400Regular_Italic,
    "Roboto-Medium": Roboto_500Medium,
    "Roboto-MediumItalic": Roboto_500Medium_Italic,
    "Roboto-Bold": Roboto_700Bold,
    "Roboto-BoldItalic": Roboto_700Bold_Italic,
  });

  console.log(fontsLoaded, error);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <>{children};</>;
  }
};

export default FontProvider;
