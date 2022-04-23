import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { useState } from "react";
import { async } from "@firebase/util";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/utils";
// import React, { FC, ReactElement, useState } from "react";
// import Parse from "parse/react-native";
// import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  const handleRecovery = async () => {
    console.log("Here line 30");
    let check = true;

    if (email.length === 0 || email.indexOf("@") === -1) {
      check = false;
      setErrors("Email not valid! Please Enter A Valid Email");
    }

    if (check) {
      try {
        await sendPasswordResetEmail(auth, email)
          .then(() => {
            navigation.navigate("Login");
          })
          .catch(() => {
            setErrors("Email Not Found! Please Enter A Valid Email");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Ionicons
                name="arrow-back"
                color="gray"
                size={24}
                style={{ marginTop: 20, marginStart: 36 }}
                // style={{ position: "absolute", right: 24 }}
                // style={{marginStart: -20, marginTop: Platform.OS === "android" ? 0 : 0}}
              />
            </TouchableOpacity>
            {/* <Text
              style={{
                // justifyContent: "center",
                // alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: 'Quicksand_1',
                color: "#DAB53F",
                marginStart: 36,
                marginTop: 14
              }}
            >
              Forgot Password
            </Text> */}
          </View>
          {/* <View style={styles.card}>
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
          </View> */}
          <Text style={{ fontSize: 24, marginTop: 50, textAlign: "center" }}>
            Forgot Password?
          </Text>
          <View
            style={{
              width: "80%",
              height: 45,
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 20,
            }}
          >
            <TextInput
              placeholder="Enter email"
              placeholderTextColor="grey"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {errors.length > 0 && (
            <Text style={styles.fieldErrors}>{errors}</Text>
          )}
          <View
            onPress={handleRecovery}
            style={{
              backgroundColor: "#496F51",
              padding: 0,
              marginTop: 0,
              width: "80%",
              height: 55,
              justifyContent: "center",
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlignVertical: "center",
                alignSelf: "center",
                flex: 1,
              }}
            >
              Send Email
            </Text>
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
    marginTop: 24,
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
  header: {
    flexDirection: "row",
    // justifyContent: "space-around",
    // alignSelf: "flex-start",
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
    paddingHorizontal: 0,
  },
  fieldErrors: {
    color: "red",
    fontSize: 12,
    marginVertical: 10,
    marginLeft: 0,
    textAlign: "center",
  },
});
