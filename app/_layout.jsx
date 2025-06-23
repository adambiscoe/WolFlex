import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { getUserData } from "../services/userService";

export default function Layout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

const MainLayout = () => {
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session User: ", session?.user?.id);

      if (session) {
        setAuth(session?.user);
        updateUserData(session?.user);
        router.replace("/Home");
      } else {
        setAuth(null);
        router.replace("/SignIn");
      }
    });
  }, []);

  const updateUserData = async (user) => {
    let res = await getUserData(user?.id);
    if (res.success) setUserData(res.data);
  };
  const [fontsLoaded] = useFonts({
    "Anton SC Regular": require("../assets/fonts/Anton SC Regular.ttf"),
  });

  if (fontsLoaded) return <Stack screenOptions={{ headerShown: false }} />;
};
