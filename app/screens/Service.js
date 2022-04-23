import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { useFonts } from "@expo-google-fonts/quicksand";
import { auth } from "../../firebase/utils";
import { signOutUser } from "../redux/User/user.actions";
import { useDispatch } from "react-redux";


const Service = ({ navigation }) => {
  const dispatch = useDispatch();
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  
    const handleLogout = () => {
      dispatch(signOutUser());
    };
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
                style={{ marginTop: 20, marginStart: 36 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: 'Quicksand_1',
                color: "#DAB53F",
                marginStart: 80,
                marginTop: 15
              }}
            >
              Service
            </Text>
          </View>
          {/* <Image
            style={styles.image}
            source={require("../assets/app_logo.png")}
          /> */}
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.changePasswordBtn} onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.changePasswordText}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Service;

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
    fontFamily: 'Quicksand_1',
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 30,
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
    fontFamily: 'Quicksand_1',
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
});
