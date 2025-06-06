import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingIn from "./LoadingIn.jsx";
import PasswordBirthday from "./PasswordBirthday.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={LoadingIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordBirthday"
        component={PasswordBirthday}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
