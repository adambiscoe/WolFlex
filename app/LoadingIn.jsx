import { useEffect } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function LoadingIn({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("SignIn"); // replace so users can't go "back" to splash
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // clean up
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Image
        source={require("../assets/images/WolfAlone.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 356,
    height: 356,
    marginBottom: 20,
    resizeMode: "contain",
    top: 20,
    right: 5,
  },
});
