import { Stack } from "expo-router";

// App.js or layout file
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Anton SC Regular": require("../assets/fonts/Anton SC Regular.ttf"),
  });

  if (fontsLoaded) return <Stack screenOptions={{ headerShown: false }} />;
}
