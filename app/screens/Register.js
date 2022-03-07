import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/utils";

const Register = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  const [email, setEmail] = useState("alex@gmail.com");
  const [password, setPassword] = useState("hellodude");
  const handleSubmit = async () => {
    try {
      console.log("Here Line 22");
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log("UserCredential => ", userCredentials);
          navigation.navigate("Introduction");
        }
      );
    } catch (error) {
      console.error("error line 27 ", error);
    }
  };
  if (!fontsLoaded) {
    return <Text>Alex waiting</Text>;
  } else {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.borderContainer}>
          <Image
            style={styles.image}
            source={require("../assets/appIcon_Iphone.jpg")}
          />
          <View style={styles.card}>
            <Text style={styles.textWelcome}>WELCOME TO</Text>
            <Text style={styles.textQuran}>The Holy Quran</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                value={email}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={setEmail}
              >
                {/* <MaterialIcons name="email" color="gray" size={24} /> */}
              </TextInput>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                value={password}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={setPassword}
                secureTextEntry={true}
              >
                {/* <MaterialIcons name="vpn-key" color="gray" size={24} /> */}
              </TextInput>
            </View>
            <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.haveAccount}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Register;

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
  card: {
    borderRadius: 15,
    backgroundColor: "#2D5C2E",
    overflow: "hidden",
    width: 310,
    height: 420,
    alignSelf: "center",
    marginTop: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
  },
  haveAccount: {
    color: "#DAB53F",
    fontSize: 14,
    marginTop: 30,
    textAlign: "center",
    fontFamily: 'Quicksand_2'
  },
  image: {
    width: 185,
    height: 185,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 20
  },
  inputText: {
    height: 50,
    color: "black",
  },
  inputView: {
    width: "90%",
    backgroundColor: "#ececec",
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    paddingStart: 20,
  },
  registerBtn: {
    width: "80%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  registerText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: 'Quicksand_1'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  textLoginWith: {
    fontSize: 16,
    textAlign: "center",
    color: "#ececec",
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 20,
    color: "#ececec",
    marginTop: 30,
    fontFamily: 'Quicksand_3'
  },
  textQuran: {
    textAlign: "center",
    fontSize: 36,
    color: "#DAB53F",
    marginTop: 5,
    fontFamily: 'Quicksand_1'
  },
});
