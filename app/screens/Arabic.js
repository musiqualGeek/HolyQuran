import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { isLoaded } from "expo-font";

const Bookmark = ({ navigation, route }) => {
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
          {/* <View style={styles.header}> */}
          <TouchableOpacity onPress={() => navigation.navigate("Language")}>
            <Ionicons
              name="arrow-back"
              color="#DAB53F"
              size={24}
              style={{ marginTop: 20, marginStart: 36 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Quicksand_1",
              color: "#DAB53F",
              textAlign: "center",
              marginTop: 0,
            }}
          >
            Arabic Translation{"\n"}Of Quran
          </Text>
          <View style={styles.block_1}>
            <View style={styles.part}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(1-9)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.part}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(9-16)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.block_2}>
            <View style={styles.part}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(16-22)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.part}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(22-27)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.part}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                  fontWeight: "bold",
                  lineHeight: 25,
                }}
              >
                AUDIO PART{"\n"}(27-30)
              </Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </View>
    );
  }
};

export default Bookmark;

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  block_1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  block_2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  part: {
    justifyContent: "center",
    width: 120,
    height: 120,
    backgroundColor: "#496F51",
    alignSelf: "center",
    marginTop: 48,
    borderRadius: 20,
    elevation: 5
  },
});
