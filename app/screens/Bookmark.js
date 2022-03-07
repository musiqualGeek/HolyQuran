import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";

const Bookmark = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Alex waiting</Text>;
  } else {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.borderContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <Ionicons
                name="arrow-back"
                color="#DAB53F"
                size={24}
                style={{ margin: 20 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: "Quicksand_1",
                marginStart: 60,
                color: "#DAB53F",
              }}
            >
              Bookmark
            </Text>
          </View>
          <Image
            style={styles.imageMosque}
            source={require("../assets/mosque.png")}
          />
        </View>
      </View>
    );
  }
};

export default Bookmark;

const styles = StyleSheet.create({
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#DAB53F",
    marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
  },
  imageMosque: {
    width: "100%",
    height: 250,
    position: "absolute",
    bottom: 0,
    marginTop: -15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
