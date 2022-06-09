import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomText from "../components/CustomText";

const Splashscreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Register");
    }, 3000);
  }, []);

  return (

      <View style={styles.mainContainer}>

        <View style={styles.borderContainer}>
          <View style={styles.VContainer}>
            <CustomText
              text="THE HOLY QURAN"
              style={styles.textQuran}
              type="1"
            />
            <Image
              style={styles.image}
              source={require("../assets/app_logo.png")}
            />
            <View>
              <CustomText
                text="English Translation and Commentry by"
                style={styles.textEnglish}
                type="2"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.authorNameBackground}
              >
                <CustomText
                  text="Maulana Muhammad Ali"
                  style={styles.textAuthorName}
                  type="1"
                />
              </TouchableOpacity>
            </View>
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
    fontSize: 20,
    color: "#2D5C2E",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textEnglish: {
    textAlign: "center",
    color: "#DAB53F",
    fontSize: 22,
    maxWidth: "80%",
  },
  textQuran: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 20,
    color: "#DAB53F",
  },
});
