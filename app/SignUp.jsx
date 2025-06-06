import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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

      <Text style={styles.subtitle}>Sign Up</Text>
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.termsText}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/SignIn")}
      >
        <Text style={styles.createText}>LOG INTO EXISTING ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}
