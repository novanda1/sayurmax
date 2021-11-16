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

export const config = {
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
