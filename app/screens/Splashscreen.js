import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Platform, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";
import * as Font from 'expo-font'
import Apploading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });

const Splashscreen = ({ navigation }) => {
  const [fontsloaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Register");
    }, 3000);
  }, []);

  
  if (fontsloaded) {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <View style={styles.VContainer} >
          <Text style={styles.textQuran}>THE HOLY QURAN</Text>
          <Image
            style={styles.image}
            source={require("../assets/app_logo.png")}
            />
          <View>
            <Text style={styles.textEnglish}>
              English Translation and Commentry{"\n"}by
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={styles.authorNameBackground}
              >
              <Text style={styles.textAuthorName}>Maulana Muhammad Ali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    <StatusBar style="auto" />
    </View>
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
};

export default Splashscreen;

const styles = StyleSheet.create({
  authorNameBackground: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#DAB53F",
    width: "100%",
    height: "auto",
    marginTop: 20,
  },
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#DAB53F",
    margin: 10,
  },
  VContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: "30%",
    height: "30%",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 0,
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
    fontSize: 22,
    fontFamily: "Quicksand_2",
  },
  textQuran: {
    fontSize: 32,
    fontFamily: "Quicksand_1",
    textAlign: "center",
    marginTop: 20,
    color: "#DAB53F",
  },
});
