import 'react-native-gesture-handler';
import { StyleSheet, View } from "react-native";
import React from "react";
import Splashscreen from "./app/screens/Splashscreen";
import Register from "./app/screens/Register";
import Login from "./app/screens/Login";
import ForgotPassword from "./app/screens/ForgotPassword";
import Introduction from "./app/screens/Introduction";
import Language from "./app/screens/Language";
import Profile from "./app/screens/Profile";
import Service from "./app/screens/Service";
import Bookmark from "./app/screens/Bookmark";
import Home from "./app/screens/Home";
import Verses from "./app/screens/Verses";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Service"
          component={Service}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bookmark"
          component={Bookmark}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verses"
          component={Verses}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;