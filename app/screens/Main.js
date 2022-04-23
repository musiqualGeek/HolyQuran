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
import TabSection from './TabSection';
import ArabicPDF from './ArabicPDF';
import { useSelector } from "react-redux";
const Stack = createStackNavigator();

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
});

const main = () => {
    const { currentProperty } = useSelector(mapState);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splashscreen">
          {/* Auth */}
      {!currentProperty && (
        <>
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
        </>
      )}
      {currentProperty && (
        <>
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
            name="Arabic"
            component={Arabic}
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
            name="Annotations"
            component={Annotations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={TabSection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Parts"
            component={TabSection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PayAudio"
            component={TabSection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verses"
            component={Verses}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArabicPDF"
            component={ArabicPDF}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
          
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default main

