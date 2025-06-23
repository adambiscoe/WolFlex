import { Alert, Button, SafeAreaView, Text } from "react-native";

import { supabase } from "../../lib/supabase";

export default function Home() {
  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign out", "Error signing out");
    }
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Logout" onPress={onLogout} />
    </SafeAreaView>
  );
}
