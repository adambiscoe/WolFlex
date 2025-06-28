import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { updateUser } from "../services/userService";
import styles from "../styles/common";
import { colors } from "../styles/theme";

export default function SignUpInfo() {
  const router = useRouter();
  const [birthday, setBirthday] = useState(new Date());
  const { user: currentUser, setUserData } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phoneNumber: "",
    bio: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUser({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        birthday: currentUser.birthday || "",
        phoneNumber: currentUser.phoneNumber || "",
        bio: currentUser.bio || "",
      });
    }
  }, [currentUser]);

  const onChangeBirthday = async (e, selectedDate) => {
    setBirthday(selectedDate);
    const formattedDate = birthday.toISOString().split("T")[0];
    console.log(formattedDate);
    setUser({ ...user, birthday: formattedDate });
  };

  const onSubmit = async () => {
    let userData = { ...user };
    let { firstName, lastName, birthday, phoneNumber, bio } = userData;
    if (!user.firstName || !user.lastName || !user.birthday) {
      console.log(user.firstName);
      Alert.alert("Error", "Must fill in full name and birthday.");
      return;
    }
    //maybe include a loading animation/screen here when/if you do
    //update user
    console.log(currentUser);
    const res = await updateUser(currentUser?.id, userData);
    console.log(res);

    setUserData({ ...currentUser, ...userData });

    router.push("/Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WordLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Tell us about yourself!</Text>
      <Text style={styles.helper}> What's your name?</Text>
      <View flexDirection="row" justifyContent="space-between" gap="20">
        <TextInput
          style={[styles.halfInput, { alignSelf: "flex-start" }]}
          placeholder="First Name"
          placeholderTextColor={colors.lightgray}
          onChangeText={(value) => setUser({ ...user, firstName: value })}
          onChanget
        />
        <TextInput
          style={[styles.halfInput, { alignSelf: "flex-end" }]}
          placeholder="Last Name"
          placeholderTextColor={colors.lightgray}
          onChangeText={(value) => setUser({ ...user, lastName: value })}
        />
      </View>
      <View flexDirection="row" justifyContent="space-between" gap="10">
        <Text style={styles.helper}> Enter your birthday here: </Text>

        <DateTimePicker
          value={birthday}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeBirthday}
        />
      </View>
      <Text style={[styles.helper, { textAlign: "center" }]}>
        Let us know some things about you. What are your hobbies, interests, and
        goals? This will be shown to every user as your profile's bio.
      </Text>
      <View>
        <TextInput
          style={styles.largeInput}
          //multiline={true}
          rows={5}
          //scrollEnabled={true}
          placeholder="Bio (optional)"
          placeholderTextColor={colors.lightgray}
          onChangeText={(value) => setUser({ ...user, bio: value })}
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={onSubmit}>
        <Text style={styles.createText}>SIGN UP!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        //will be a test button for now, change back to a router push later
        onPress={() => router.push("/SignIn")}
        // onPress={console.log(user.birthday)}
      >
        <Text style={styles.createText}>LOG INTO EXISTING ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}
