import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../styles/common";

export default function PasswordBirthday() {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const router = useRouter();
  return (
    <View>
      <Text style={styles.helper}>Enter a password here</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.helper}>Confirm password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={setConfPassword}
        secureTextEntry
      />
      <Button title="back" onPress={() => router.push("/SignUp")} />
    </View>
  );
}
