import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default () => {
  const [fontsLoaded] = useFonts({
    "andika-bold": require("../assets/fonts/Andika-Bold.ttf"),
    "andika-regular": require("../assets/fonts/Andika-Regular.ttf"),
    "andika-italic": require("../assets/fonts/Andika-Italic.ttf"),
    "andika-boldItalic": require("../assets/fonts/Andika-Italic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationTypeForReplace: "push",
      }}
    />
  );
};
