import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import React, { useEffect } from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { isLoaded } from "expo-font";

const Annotations = ({ navigation, route }) => {
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
        <ImageBackground
          style={styles.border}
          source={require("../assets/border_1.png")}
        />
        <View style={styles.borderContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <Ionicons
                name="arrow-back"
                color="#DAB53F"
                size={24}
                style={{ marginTop: 20, marginStart: 36}}
                // style={{ position: "absolute", right: 24 }}
                // style={{marginStart: -20, marginTop: Platform.OS === "android" ? 0 : 0}}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: 'Quicksand_1',
                color: "#DAB53F",
                marginStart: 60,
                marginTop: 15
              }}
            >
              Annotations
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default Annotations;

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "#DAB53F",
    // marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-around",
    // alignSelf: "flex-start",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
});