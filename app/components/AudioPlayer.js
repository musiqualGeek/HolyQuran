import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const AudioPlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slide}></View>
      <TouchableOpacity>
        <Ionicons name="play" size={32} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    height: 5,
    width: "80%",
    backgroundColor: "white",
    marginBottom: 15,
  },
});
