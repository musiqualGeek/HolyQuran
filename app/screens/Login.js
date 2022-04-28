import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView,
  Dimensions
} from "react-native";

import { useFonts } from "@expo-google-fonts/quicksand";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo } from "@expo/vector-icons";

import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";

import { useDispatch, useSelector } from "react-redux";

const mapState = ({ user }) => ({
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
});

const Login = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  console.log("Loign Screen");
  const { propertySignInSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);
  const [email, onChangeEmail] = useState("rami@gmail.com");
  const [password, onChangepassword] = useState("hellodude");
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [currentErrors, setCurrentErrors] = useState("");

  // useEffect(() => {
  //   ResetForm();
  // }, []);

  const ResetForm = () => {
    onChangeEmail("");
    onChangepassword("");
    setCurrentErrors("");
  };

  const handlePasswordSecure = () => {
    setIsSecure(!isSecure);
    if (isSecure) {
      setIconPasswordName("eye-with-line");
    } else {
      setIconPasswordName("eye");
    }
  };

  useEffect(() => {
    if (propertySignInSuccess) {
      ResetForm();
      dispatch(resetAllAuthForms());
    }
  }, [propertySignInSuccess]);

  const handleLogin = async () => {
    var checking_form = "true";
    if (email.length === 0 || email.indexOf("@") === -1) {
      setEmailErrors("* Email Field Required");
      checking_form = "false";
    } else {
      setEmailErrors("");
    }
    if (password.length < 6) {
      setPasswordErrors("* Password Field Required, 6 caracter min");
      checking_form = "false";
    } else {
      setPasswordErrors("");
    }

    if (checking_form === "true") {
      dispatch(signInUser({ email, password }));
    }
  };

  useEffect(() => {
    console.log(propertySignInSuccess, errors);
    setCurrentErrors(errors);
  }, [errors]);

  // if (!fontsLoaded) {
  //   return <Text>Alex waiting</Text>;
  // } else {
  return (
    <>
    <View style={styles.mainContainer}>
    <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.borderContainer}>
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
              onChangeText={onChangeEmail}
            />
          </View>
          <Text style={styles.fieldErrors}>{emailErrors}</Text>
          <View
            style={[
              styles.inputView,
              {
                position: "relative",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
              },
            ]}
          >
            <TextInput
              style={styles.inputText}
              onChangeText={onChangepassword}
              value={password}
              secureTextEntry={isSecure}
              placeholder="Password"
              placeholderTextColor={"grey"}
            />
            <Entypo
              style={styles.eyeIcon}
              name={iconPasswordName}
              size={20}
              color="gray"
              onPress={handlePasswordSecure}
            />
          </View>
          <Text style={styles.fieldErrors}>{passwordErrors}</Text>
          {email && password ? (
            <TouchableOpacity style={styles.pinkBtn} onPress={handleLogin}>
              <Text style={styles.textBtn}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity disabled style={styles.pinkBtn2}>
              <Text style={styles.textBtn}>Sign In</Text>
            </TouchableOpacity>
          )}
          <Text style={[styles.fieldErrors, { marginTop: 10 }]}>
            {currentErrors}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity> */}
          <Text style={styles.textOR}>OR</Text>
          <Text style={styles.textLoginWith}>Login with</Text>
          <View style={styles.socialIcons}>
            <View style={styles.googleIcon}>
              <TouchableOpacity>
                <AntDesign name="google" color="#ff4c4c" size={24} />
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
            <Text style={styles.noAccount}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  appleIcon: {
    marginStart: 20,
  },
  border: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // opacity: 1,
    // zIndex: -1,
    // resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    // marginTop: Platform.OS === "android" ? 48 : 44,
  },
  borderContainer: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  card: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#496F51",
    overflow: "hidden",
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 10,
  },
  facebookIcon: {
    marginStart: 20,
  },
  forgot: {
    color: "white",
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Quicksand_1",
    marginLeft: 10,
  },
  googleIcon: {
    marginStart: 0,
  },
  image: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
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
  textBtn: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 8,
  },
  pinkBtn: {
    width: "90%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  pinkBtn2: {
    width: "90%",
    backgroundColor: "grey",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  disabledBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    marginVertical: 10,
    borderRadius: 10,
  },
  fieldErrors: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});
