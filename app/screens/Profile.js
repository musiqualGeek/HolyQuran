import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { auth } from "../../firebase/utils";

const Profile = ({ navigation }) => {
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
                color="gray"
                size={28}
                style={{ marginTop: 48, marginStart: 36 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: "Quicksand_1",
                color: "#264A27",
                marginTop: -35,
              }}
            >
              Profile
            </Text>
            {/* <View style={styles.profilePic}>
            {auth.currentUser.photoURL ? (
              <Image
                source={{ uri: auth.currentUser.photoURL }}
                style={{
                  width: 200,
                  height: 200,
                }}
                resizeMode="cover"
              />
            ) : (
              <FontAwesome
                name="user"
                color="#ffc845"
                size={80}
                style={{
                  margin: 16,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              />
            )}
          </View> */}
            {/* <Image
          style={styles.image}
          source={require("../assets/app_logo.png")}
        /> */}
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Quicksand_1",
                color: "#264A27",
                marginTop: 60,
                marginStart: 30,
              }}
            >
              Name
            </Text>
            <View style={styles.nameContainer}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#2D5C2E",
                  fontFamily: "Quicksand_1",
                  fontSize: 16,
                }}
              >
                {auth.currentUser.displayName && auth.currentUser.displayName}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Quicksand_1",
                color: "#264A27",
                marginTop: 16,
                marginStart: 30,
              }}
            >
              E-mail
            </Text>
            <View style={styles.emailContainer}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Quicksand_1",
                  fontSize: 16,
                }}
              >
                {auth.currentUser.email && auth.currentUser.email}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default Profile;

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
  emailContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  // header: {
  //   flexDirection: "row",
  //   // justifyContent: "space-around",
  //   // alignSelf: "flex-start",
  // },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  nameContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
