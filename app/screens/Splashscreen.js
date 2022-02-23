import { StyleSheet, Text, View, Image, Platform, Button } from "react-native";
import React, { useEffect } from "react";

const Splashscreen = ({ navigation }) => {
  //Splashscreen delay 
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Register");
    }, 3000);
  }, []);

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
        <View style={styles.authorNameBackground}>
          <Text style={styles.textAuthorName}>Maulana Muhammad Ali</Text>
        </View>
      </View>
    </View>
  );
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
    backgroundColor: "#2D5C2E",
  },
  textAuthorName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D5C2E",
    textAlign: "center",
  },
  textEnglish: {
    textAlign: "center",
    color: "#DAB53F",
    fontSize: 28,
  },
  textContainer: {
    marginTop: 40,
    marginStart: 40,
    marginEnd: 40,
  },
  textQuran: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    color: "#DAB53F",
  },
});
