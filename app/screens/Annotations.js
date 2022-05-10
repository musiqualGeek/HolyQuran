import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Annotations = ({ navigation, route }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
      <BackRoute navigation={navigation} color="" />
        <View style={styles.header}>
          <CustomText text="Annotations" style={styles.title} type="1" />
        </View>
      </View>
    </View>
  );
};

export default Annotations;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    marginVertical: 10,
    marginTop: 28,
    marginBottom: 28,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "#264A27",
  },
  // Sorted
  header: {
    width: "100%",
  },
});
