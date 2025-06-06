import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes, logoWidth } from "../styles/theme";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  logo: {
    width: logoWidth.signin,
    height: logoWidth.signin,
    marginBottom: 20,
    resizeMode: "contain",
    flex: 0,
    top: 30,
  },
  title: {
    fontFamily: fontFamilies.main,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.black,
  },
  subtitle: {
    fontFamily: fontFamilies.main,
    justifyContent: "left",
    fontSize: fontSizes.subheading,
    fontWeight: "bold",
    marginTop: 5,
  },
  helper: {
    fontFamily: fontFamilies.main,
    fontSize: fontSizes.regular,
    marginBottom: 20,
  },

  input: {
    color: colors.lightgray,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },

  continueButton: {
    backgroundColor: colors.red,
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  continueText: { color: colors.white, fontWeight: "bold" },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  line: { flex: 1, height: 1, backgroundColor: colors.midgray },
  orText: { marginHorizontal: 10, color: colors.midgray },

  socialButton: {
    backgroundColor: colors.midgray,
    paddingVertical: 12,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  socialText: { fontSize: fontSizes.helper },

  termsText: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  link: { color: colors.black, fontWeight: "bold" },

  createButton: {
    backgroundColor: colors.red,
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
  },
  createText: { color: colors.white, fontWeight: "bold" },
});
