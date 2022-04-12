import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform
} from "react-native";

import { useFonts } from "@expo-google-fonts/quicksand";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/utils";

const Login = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  const [email, setEmail] = useState("alex@gmail.com");
  const [password, setPassword] = useState("hellodude");
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async () => {
          console.log("User logged in !!");
          navigation.navigate("Introduction");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("from catch in login redux actions");
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
                placeholder="Email"
                value={email}
                placeholderTextColor="grey"
                onChangeText={setEmail}
              >
                {/* <MaterialIcons name="email" color="gray" size={24} /> */}
              </TextInput>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                value={password}
                placeholderTextColor="grey"
                onChangeText={setPassword}
                secureTextEntry={true}
              >
                {/* <MaterialIcons name="vpn-key" color="gray" size={24} /> */}
              </TextInput>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.textOR}>OR</Text>
            <Text style={styles.textLoginWith}>Login with</Text>
            <View style={styles.socialIcons}>
              <View style={styles.googleIcon}>
                <TouchableOpacity>
                  <AntDesign name="google" color="#DB4437" size={24} />
                </TouchableOpacity>
              </View>
              {/* <View style={styles.facebookIcon}>
                <TouchableOpacity>
                  <FontAwesome name="facebook" color="#4267B2" size={24} />
                </TouchableOpacity>
              </View>
              <View style={styles.appleIcon}>
                <TouchableOpacity>
                  <FontAwesome name="apple" color="#ececec" size={24} />
                </TouchableOpacity>
              </View> */}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.noAccount}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Login;

const styles = StyleSheet.create({
  appleIcon: {
    marginStart: 20,
  },
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
    width: Platform.OS === "android" ? 280 : 300,
    height: Platform.OS === "android" ? 470 : 440,
    alignSelf: "center",
    marginTop: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
  },
  facebookIcon: {
    marginStart: 20,
  },
  forgot: {
    color: "white",
    fontSize: 13,
    marginTop: 5,
    textAlign: "right",
    fontFamily: "Quicksand_1",
    marginEnd: 20,
  },
  googleIcon: {
    marginStart: 0,
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
    height: 45,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    paddingStart: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Quicksand_1",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  noAccount: {
    color: "white",
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
    fontFamily: "Quicksand_1",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  textLoginWith: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    fontFamily: "Quicksand_1",
  },
  textOR: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "#ececec",
    fontFamily: "Quicksand_1",
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 24,
    color: "#ececec",
    marginTop: 16,
    fontFamily: "Quicksand_1",
  },
  textQuran: {
    textAlign: "center",
    fontSize: 32,
    color: "#DAB53F",
    fontFamily: "Quicksand_1",
  },
});
