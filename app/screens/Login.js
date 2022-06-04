import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const mapState = ({ user }) => ({
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
});

const Login = ({ navigation }) => {
  const { propertySignInSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);
  const [email, onChangeEmail] = useState("Ramy@gmail.com");
  const [password, onChangepassword] = useState("hello156");
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
      console.log('here login ?')
      dispatch(signInUser({ email, password }));
    }
  };

  useEffect(() => {
    console.log(propertySignInSuccess, errors);
    setCurrentErrors(errors);
  }, [errors]);

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.border}
          source={require("../assets/border_1.png")}
          resizeMode="cover"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.borderContainer}
        >
          <BackRoute navigation={navigation} color="" />
          <View style={styles.imageTopContainer}>
            <Image
              style={styles.imageTop}
              source={require("../assets/appIcon_Iphone.jpg")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.card}>
            <CustomText text="WELCOME TO" style={styles.textWelcome} type="1" />
            <CustomText
              text="The Holy Quran"
              style={styles.textQuran}
              type="1"
            />
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
            <Text style={[styles.fieldErrors, { marginTop: 0 }]}>
              {currentErrors}
            </Text>
            {email && password ? (
              <TouchableOpacity style={styles.pinkBtn} onPress={handleLogin}>
                <CustomText text="Sign in" style={styles.textBtn} type="1" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled style={styles.pinkBtn2}>
                <CustomText text="Sign in" style={styles.textBtn} type="1" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <CustomText
                text="Don't have an account? Sign up"
                style={styles.noAccount}
                type="1"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <CustomText
                text="Forgot Password?"
                style={styles.noAccount}
                type="1"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    marginVertical: 10,
    marginTop: 28,
    marginBottom: 28,
  },
  imageTopContainer: {
    width: "80%",
    alignSelf: "center",
  },
  imageTop: {
    width: "100%",
    height: 340,
    borderRadius: 15,
  },
  card: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#496F51",
    width: "80%",
    alignSelf: "center",
    elevation: 3,
    marginVertical: 20,
  },
  textWelcome: {
    textAlign: "center",
    fontSize: 18,
    color: "#ececec",
  },
  textQuran: {
    textAlign: "center",
    fontSize: 32,
    color: "#DAB53F",
    marginBottom: 20,
  },
  inputView: {
    width: "90%",
    backgroundColor: "#ececec",
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 5,
    alignSelf: "center",
    paddingStart: 20,
  },
  inputText: {
    width: "90%",
    color: "#003666",
    fontSize: 16,
  },
  fieldErrors: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
  pinkBtn: {
    width: "90%",
    backgroundColor: "#DAB53F",
    borderRadius: 25,
    paddingVertical: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  pinkBtn2: {
    width: "90%",
    backgroundColor: "grey",
    borderRadius: 25,
    paddingVertical: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  textBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  noAccount: {
    color: "white",
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
  },
  eyeIcon: {
    width: 20,
  }
});
