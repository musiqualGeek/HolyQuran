import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/utils";

const Login = ({ navigation }) => {
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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <Image
          style={styles.image}
          source={require("../assets/app_logo.png")}
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
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
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
            <View style={styles.facebookIcon}>
              <TouchableOpacity>
                <FontAwesome name="facebook" color="#4267B2" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.appleIcon}>
              <TouchableOpacity>
                <FontAwesome name="apple" color="#ececec" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.noAccount}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  appleIcon: {
    marginStart: 20,
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
  card: {
    borderRadius: 15,
    backgroundColor: "#264A27",
    overflow: "hidden",
    width: 310,
    height: 460,
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
    color: "#DAB53F",
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
    marginEnd: 20,
  },
  googleIcon: {
    marginStart: 0,
  },
  image: {
    width: 120,
    height: 180,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
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
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
  noAccount: {
    color: "#DAB53F",
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
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
    color: "#DAB53F",
  },
  textOR: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    color: "#ececec",
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 20,
    color: "#ececec",
    marginTop: 16,
  },
  textQuran: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#DAB53F",
    marginTop: 5,
  },
});
