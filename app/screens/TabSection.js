import { StyleSheet, Text, View, Platform , StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./Home";
import Parts from "./Parts";
import PlayAudio from "./PlayAudio";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const TabSection = () => {
  const tabBarOptions = {
    activeTintColor: "white",
    inactiveTintColor: "black",
    indicatorStyle: { backgroundColor: "#517859", height: "100%" },
    pressOpacity: 1,
  };
  return (
    <View style={styles.mainContainer}>
        <StatusBar backgroundColor="#496F51" barStyle="light-content" />
      <View style={styles.appBar}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "white",
            fontWeight: "bold",
          }}
        >
          The Holy Qur'an
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={tabBarOptions}
        initialRouteName="HomeTab"
      >
        <Tab.Screen name="HomeTab" component={Home} />
        {/* <Tab.Screen name="Parts" component={Parts} /> */}
        <Tab.Screen name="AudioTab" component={PlayAudio} />
      </Tab.Navigator>
    </View>
  );
};

export default TabSection;
const styles = StyleSheet.create({
  appBar: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    width: "100%",
    backgroundColor: "#496F51",
    height: Platform.OS === "android" ? 48 : 44,
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "#496F51",
  },
});
