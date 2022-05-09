import React from "react";
import Splashscreen from "./Splashscreen";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Introduction from "./Introduction";
import Language from "./Language";
import Arabic from "./Arabic";
import Profile from "./Profile";
import Service from "./Service";
import Annotations from "./Annotations";
import Bookmark from "./Bookmark";
import Verses from "./Verses";

import TestScreen from "./TestScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabSection from "./TabSection";
import ArabicPDF from "./ArabicPDF";
import { useSelector } from "react-redux";
import PlayerFunct from "./FunctionalPlayer";

const Stack = createStackNavigator();

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
});

const main = () => {
  const { currentProperty } = useSelector(mapState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Auth */}
        {!currentProperty && (
          <>
            <Stack.Screen name="Splashscreen" component={Splashscreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
        {currentProperty && (
          <>
            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="Arabic" component={Arabic} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Bookmark" component={Bookmark} />
            <Stack.Screen name="Annotations" component={Annotations} />
            <Stack.Screen name="HomeScreen" component={TabSection} />
            <Stack.Screen name="Parts" component={TabSection} />
            <Stack.Screen name="PayAudio" component={TabSection} />
            <Stack.Screen name="Verses" component={Verses} />
            <Stack.Screen name="ArabicPDF" component={ArabicPDF} />
            <Stack.Screen name="TestScreen" component={TestScreen} />
            <Stack.Screen name="Player" component={PlayerFunct} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default main;
