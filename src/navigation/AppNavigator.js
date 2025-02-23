import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import SplashScreen from "../screens/SplashScreen";
 import { HomeScreen } from "../screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <Layout />
  );
}

export const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
