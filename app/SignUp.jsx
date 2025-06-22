import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";
import styles from "../styles/common";
import { colors } from "../styles/theme";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleContinue = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords must match.");
      return;
    }
    const trimmedEmail = email.trim();
    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
    });

    console.log("session", data);
    console.log("error", error);
    if (error) {
      Alert.alert("Error", error.message + ".");
    } else {
      router.push("/PasswordBirthday");
    }
  };

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WordLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Welcome to WolFlex!</Text>

      <Text style={styles.helper}>Enter a valid email address here</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor={colors.lightgray}
        onChangeText={setEmail}
      />

      <Text style={styles.helper}>Enter a valid password here</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.lightgray}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={colors.lightgray}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <Text style={styles.termsText}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity style={styles.createButton} onPress={handleContinue}>
        <Text style={styles.createText}>CONTINUE</Text>
      </TouchableOpacity>
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/SignIn")}
      >
        <Text style={styles.createText}>LOG INTO EXISTING ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}
