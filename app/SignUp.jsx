import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles/common";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WordLogo.png")}
        style={styles.logo}
      />
      <Text>Sign Up</Text>
    </View>
  );
}
