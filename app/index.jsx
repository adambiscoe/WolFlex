import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingIn from "./LoadingIn.jsx";
import SignIn from "./SignIn.jsx";

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
    </Stack.Navigator>
  );
}
