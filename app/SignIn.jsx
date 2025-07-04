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

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //NEED TO REMOVE FACE AUTH AT SOME POINT< OR MAKE IT WORK
  const handleContinue = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log("session", data);
    console.log("error", error);
    if (error) {
      console.log(email);
      console.log(password);
      Alert.alert("Error", error.message + ".");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WordLogo.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>Sign In</Text>
      <Text style={styles.helper}>
        Enter email or username and password here
      </Text>

      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#808080"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.termsText}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/SignUp")}
      >
        <Text style={styles.createText}>CREATE NEW ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}
