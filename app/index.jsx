import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import LoadingIn from "./LoadingIn.jsx";
import SignUpInfo from "./SignUpInfo.jsx";

import Home from "./(main)/Home.jsx";
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
        name="SignUpInfo"
        component={SignUpInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
