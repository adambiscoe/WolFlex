import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/common";
import { colors } from "../styles/theme";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WordLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Welcome to WolFlex!</Text>
      <Text style={styles.helper}> What's your name?</Text>
      <View flexDirection="row" justifyContent="space-between" gap="20">
        <TextInput
          style={[styles.halfInput, { alignSelf: "flex-start" }]}
          placeholder="First Name"
          placeholderTextColor={colors.lightgray}
          value={firstName}
        />
        <TextInput
          style={[styles.halfInput, { alignSelf: "flex-end" }]}
          placeholder="Last Name"
          placeholderTextColor={colors.lightgray}
          value={lastName}
        />
      </View>

      <Text style={styles.helper}>Enter a valid email address here</Text>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor={colors.lightgray}
        value={email}
      />

      <Text style={styles.termsText}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/PasswordBirthday")}
      >
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
