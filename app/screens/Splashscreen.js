import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Platform, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";

const Splashscreen = ({ navigation }) => {
  //Splashscreen delay
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Register");
    }, 3000);
  }, []);
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
          <View>
            <Text style={styles.textQuran}>THE HOLY QURAN</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/app_logo.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textEnglish}>
              English Translation and Commentry{"\n"}by
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.authorNameBackground}
          >
            <Text style={styles.textAuthorName}>Maulana Muhammad Ali</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Splashscreen;

const styles = StyleSheet.create({
  authorNameBackground: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#DAB53F",
    width: 336,
    height: 48,
    marginTop: 50,
    shadowColor: "gray",
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#DAB53F",
    marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 360,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#496F51",
  },
  textAuthorName: {
    fontSize: 24,
    fontFamily: "Quicksand_1",
    color: "#2D5C2E",
    textAlign: "center",
  },
  textEnglish: {
    textAlign: "center",
    color: "#DAB53F",
    fontSize: 28,
    fontFamily: "Quicksand_2",
  },
  textContainer: {
    marginTop: 40,
    marginStart: 40,
    marginEnd: 40,
  },
  textQuran: {
    fontSize: 36,
    fontFamily: "Quicksand_1",
    textAlign: "center",
    marginTop: 40,
    color: "#DAB53F",
  },
});
