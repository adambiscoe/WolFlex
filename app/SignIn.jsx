import * as Font from "expo-font";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    Font.loadAsync({
      "Anton SC Regular": require("../assets/fonts/Anton SC Regular.ttf"),
    });
  }, []);

  const handleContinue = () => {
    Alert.alert("Logging in with:", `${email}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} />
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
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#808080"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>🇬 Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}> Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By clicking continue, you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 194,
    height: 194,
    marginBottom: 20,
    resizeMode: "contain",
    top: 20,
  },
  title: {
    fontFamily: "Anton SC Regular",
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    alignContent: "center",
    fontFamily: "Anton SC Regular",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  helper: { fontFamily: "Anton SC Regular", fontSize: 12, marginBottom: 20 },

  input: {
    color: "#808080",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },

  continueButton: {
    backgroundColor: "#c1121f",
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  continueText: { color: "#fff", fontWeight: "bold" },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  orText: { marginHorizontal: 10, color: "#666" },

  socialButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  socialText: { fontSize: 14 },

  termsText: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  link: { color: "#000", fontWeight: "bold" },

  createButton: {
    backgroundColor: "#c1121f",
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
  },
  createText: { color: "#fff", fontWeight: "bold" },
});
