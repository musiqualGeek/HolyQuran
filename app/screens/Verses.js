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

const Verses = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  useEffect(() => {
    console.log("from vers", route.params.verse);
  }, []);
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
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Ionicons
                name="arrow-back"
                color="gray"
                size={24}
                style={{marginStart: 24}}
                // style={{ position: "absolute", right: 24 }}
                // style={{marginStart: -20, marginTop: Platform.OS === "android" ? 0 : 0}}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 24,
                fontFamily: "Quicksand_1",
                marginTop: -5,
                color: "#264A27",
                position: "absolute",
                right: Platform.OS === 'android' ? 145 : 160
              }}
            >
              Verses
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Verses")}>
              <FontAwesome
                name="bookmark-o"
                color="gray"
                size={24}
                style={{ position: "absolute", right: Platform.OS === 'android' ? -280 : -310, marginTop: Platform.OS === 'android' ? 2 : 0 }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, marginBottom: 24 }}>
            <Text
              style={{
                maxWidth: "100%",
                color: "white",
                fontSize: Platform.OS === 'android' ? 18 : 16,
                // fontFamily: "Quicksand_1",
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginStart: 16,
                marginEnd: 16,
                marginTop: 20,
                color: "#000",
              }}
            >
              {route.params.verse.verse}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default Verses;

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
    marginTop: 30,
  },
 
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
});
