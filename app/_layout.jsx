import { Stack, useRouter } from "expo-router";

// App.js or layout file
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

export default function Layout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

const MainLayout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session user: ", session?.user?.id);

      if (session) {
        setAuth(session?.user);
        router.replace("/Home");
      } else {
        setAuth(null);
        router.replace("/SignIn");
      }
    });
  }, []);
  const [fontsLoaded] = useFonts({
    "Anton SC Regular": require("../assets/fonts/Anton SC Regular.ttf"),
  });

  if (fontsLoaded) return <Stack screenOptions={{ headerShown: false }} />;
};
