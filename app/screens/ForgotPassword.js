import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
// import React, { FC, ReactElement, useState } from "react";
// import Parse from "parse/react-native";
// import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Ionicons
              name="arrow-back"
              color="#DAB53F"
              size={24}
              style={{ marginStart: 36, marginTop: 48 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontFamily: 'Quicksand_1',
              marginTop: -36,
              color: "#DAB53F",
            }}
          >
            Forgot Password
          </Text>

          <View style={styles.card}>
            <Text
              style={{
                marginTop: 45,
                marginStart: 20,
                marginEnd: 20,
                color: "#fff",
                fontSize: 16,
                fontFamily: 'Quicksand_2',
                textAlign: "center",
              }}
            >
              {"Please enter your account email to reset your password:"}
            </Text>
            <TextInput
              style={{
                width: "90%",
                height: 45,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 40,
                paddingStart: 20,
                justifyContent: "center",
                fontFamily: 'Quicksand_1',
                alignSelf: "center",
              }}
              placeholder={"Your account email"}
            />
            <TouchableOpacity onPress={() => doUserPasswordReset()}>
              <View
                style={{
                  backgroundColor: "#DAB53F",
                  width: "60%",
                  height: 45,
                  marginTop: 45,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#264A27",
                    fontFamily: 'Quicksand_1'
                  }}
                >
                  {"Reset"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default ForgotPassword;

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
  card: {
    borderRadius: 15,
    backgroundColor: "#496F51",
    overflow: "hidden",
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 100,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
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
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
});
