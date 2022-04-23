import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";
import {
  signUpUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const mapState = ({ user }) => ({
  propertySignUpSuccess: user.propertySignUpSuccess,
  errors: user.errors,
});

const Register = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });

  // Start
  console.log("Register Screen");
  const { propertySignUpSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);

  const [firstName, onChangefirstName] = useState("rami");
  const [email, onChangeEmail] = useState("rami@gmail.com");
  const [password, onChangepassword] = useState("hellodude");
  const [isSelected, setSelected] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [error, setError] = useState([]);
  // Hnadle Errors
  const [firstNameErrors, setFirstNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [termsErrors, setTermsErrors] = useState("");
  const [currentErrors, setCurrentErrors] = useState(errors);

  // useEffect(() => {
  //   ResetForm();
  // }, []);

  const ResetForm = () => {
    onChangefirstName("");
    onChangeEmail("");
    onChangepassword("");
    setIsSecure(true);
    setIconPasswordName("eye");
    setSelected(false);
    setError([]);
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
    if (propertySignUpSuccess) {
      ResetForm();
      dispatch(resetAllAuthForms());
      navigation.navigate("Login");
    }
  }, [propertySignUpSuccess]);

  const handleRegister = async () => {
    console.log("Here");
    var checking_form = "true";
    if (firstName.length === 0) {
      setFirstNameErrors("* First Name Field Required");
      checking_form = "false";
    } else {
      setFirstNameErrors("");
    }
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
      console.log("done");
      dispatch(signUpUser({ fullname: firstName, email, password }));
    }
  };
  // End
  // if (!fontsLoaded) {
  //   return <Text>Alex waiting</Text>;
  // } else {
    return (
      <>
        <ImageBackground
          style={styles.border}
          source={require("../assets/border_1.png")}
        />
        <View style={styles.mainContainer}>
          <ScrollView style={styles.borderContainer}>
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
                  onChangeText={onChangefirstName}
                  value={firstName}
                  placeholder="Fullname"
                  placeholderTextColor="#003f5c"
                />
                {/* <MaterialIcons name="email" color="gray" size={24} /> */}
              </View>
              <Text style={styles.fieldErrors}>{firstNameErrors}</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  value={email}
                  placeholder="Email"
                  placeholderTextColor="#003f5c"
                  onChangeText={onChangeEmail}
                />
                {/* <MaterialIcons name="email" color="gray" size={24} /> */}
              </View>
              <Text style={styles.fieldErrors}>{emailErrors}</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangepassword}
                  value={password}
                  secureTextEntry={isSecure}
                  placeholder="Password"
                  placeholderTextColor={"grey"}
                />
                <Entypo
                  style={styles.eyeIcon}
                  name={iconPasswordName}
                  size={25}
                  color="black"
                  onPress={handlePasswordSecure}
                />
                {/* <MaterialIcons name="vpn-key" color="gray" size={24} /> */}
              </View>
              <Text style={styles.fieldErrors}>{passwordErrors}</Text>
              <View>
                {firstName && email && password ? (
                  <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={handleRegister}
                  >
                    <Text style={styles.registerText}>Register</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.registerText}>Register</Text>
                  </TouchableOpacity>
                )}
              </View>
              <Text style={[styles.fieldErrors, { marginTop: 10 }]}>
                {currentErrors}
              </Text>
              {/* < style={styles.registerBtn} onPress={handleSubmit}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity> */}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.haveAccount}>
                  Already have an account? Login
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
          <StatusBar style="auto" />
      </>
    );
  }

export default Register;

const styles = StyleSheet.create({
  border: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    zIndex: -1,
    resizeMode: "cover",
    marginTop: Platform.OS === "android" ? 48 : 44,
    // position: "absolute",
    // bottom: 0,
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
    width: 280,
    // height: 420,
    alignSelf: "center",
    marginVertical: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
  },
  haveAccount: {
    color: "#fff",
    fontSize: 14,
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Quicksand_2",
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 45,
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
    fontFamily: "Quicksand_1",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: Platform.OS === "android" ? 48 : 44,
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
    fontFamily: "Quicksand_1",
  },
  textQuran: {
    textAlign: "center",
    fontSize: 32,
    color: "#DAB53F",
    marginTop: 5,
    fontFamily: "Quicksand_1",
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    top: 22,
    fontSize: 22,
  },
  disabledBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    marginTop: 50,
    borderRadius: 10,
  },
  fieldErrors: {
    // backgroundColor: "white",
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});
