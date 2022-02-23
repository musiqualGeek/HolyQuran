import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/utils";

const Service = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      signOut(auth).then(() => {
        console.log("User signed out!");
        navigation.navigate("Login");
      });
    } catch (err) {
      console.log("Error from Sign out action !!");
      console.log(err);
    }
  };
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
              fontSize: 28,
              fontWeight: "bold",
              color: "#ececec",
              marginStart: 75,
            }}
          >
            Service
          </Text>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/app_logo.png")}
        />
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changePasswordBtn}>
          <Text style={styles.changePasswordText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <Image
          style={styles.imageMosque}
          source={require("../assets/mosque.png")}
        />
      </View>
    </View>
  );
};

export default Service;

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
  changePasswordBtn: {
    width: "80%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
    elevation: 5,
  },
  changePasswordText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 250,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  imageMosque: {
    width: "100%",
    height: 250,
    position: "absolute",
    bottom: 0,
    // justifyContent: "center",
    // alignSelf: "center",
    marginTop: -15,
  },
  logoutBtn: {
    width: "80%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 45,
    elevation: 5,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
});