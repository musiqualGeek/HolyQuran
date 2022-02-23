import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { auth } from "../../firebase/utils";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
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
            marginTop: -50,
          }}
        >
          Profile
        </Text>
        <View style={styles.profilePic}>
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
        </View>
        {/* <Image
          style={styles.image}
          source={require("../assets/app_logo.png")}
        /> */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#DAB53F",
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
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {auth.currentUser.displayName}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#DAB53F",
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
              color: "#2D5C2E",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {auth.currentUser.email && auth.currentUser.email}
          </Text>
        </View>
        <Image
          style={styles.imageMosque}
          source={require("../assets/mosque.png")}
        />
      </View>
    </View>
  );
};

export default Profile;

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
  emailContainer: {
    width: "90%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  imageMosque: {
    width: "100%",
    height: 250,
    position: "absolute",
    bottom: 0,
    marginTop: 25,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
  nameContainer: {
    width: "90%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  profilePic: {
    width: 120,
    height: 120,
    backgroundColor: "#DAB53F",
    borderRadius: 120 / 2,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
});
