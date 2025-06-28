import { Alert, Button, SafeAreaView, Text } from "react-native";

import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const router = useRouter();

  const { user } = useAuth();

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign out", "Error signing out");
    } else {
      router.replace("/SignIn");
    }
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Logout" onPress={onLogout} />
    </SafeAreaView>
  );
}
