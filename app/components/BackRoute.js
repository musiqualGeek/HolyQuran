import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackRoute = (props) => {
  const { navigation, color } = props;
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          color={color.length > 0 ? color : "gray"}
          size={24}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackRoute;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    justifyContent: "flex-start",
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  back: {
    fontSize: 14,
    color: "#000",
  },
  iconStyle: {},
});
