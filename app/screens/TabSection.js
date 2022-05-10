import { StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./Home";
import PlayAudio from "./PlayAudio";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Tab = createMaterialTopTabNavigator();
const TabSection = ({ navigation }) => {
  const tabBarOptions = {
    activeTintColor: "white",
    inactiveTintColor: "black",
    indicatorStyle: { backgroundColor: "#496F51", height: "100%" },
    pressOpacity: 1,
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.appBar}>
        <BackRoute navigation={navigation} color="#fff" />
        <CustomText text="The Holy Qur'an" style={styles.title} type="1" />
      </View>
      <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="Chapters">
        <Tab.Screen name="Chapters" component={Home} />
        <Tab.Screen name="Audio" component={PlayAudio} />
      </Tab.Navigator>
    </View>
  );
};

export default TabSection;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  appBar: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#496F51",
    paddingVertical: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 0,
  },
});
