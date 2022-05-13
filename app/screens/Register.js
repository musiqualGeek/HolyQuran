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
import {
  signUpUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const mapState = ({ user }) => ({
  propertySignUpSuccess: user.propertySignUpSuccess,
  errors: user.errors,
});

const Register = ({ navigation }) => {
  const { propertySignUpSuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);

  const [firstName, onChangefirstName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  // Hnadle Errors
  const [firstNameErrors, setFirstNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [currentErrors, setCurrentErrors] = useState("");

  useEffect(() => {
    ResetForm();
  }, []);

  const ResetForm = () => {
    onChangefirstName("");
    onChangeEmail("");
    onChangepassword("");
    setIsSecure(true);
    setIconPasswordName("eye");
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
      dispatch(signUpUser({ fullname: firstName, email, password }));
    }
  };

  useEffect(() => {
    console.log(propertySignUpSuccess, errors);
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
                onChangeText={onChangefirstName}
                value={firstName}
                placeholder="Full Name"
                placeholderTextColor="gray"
              />
            </View>
            {firstNameErrors.length > 0 && (
              <CustomText
                text={firstNameErrors}
                style={styles.fieldErrors}
                type="1"
              />
            )}
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                value={email}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={onChangeEmail}
              />
            </View>
            {emailErrors.length > 0 && (
              <CustomText
                text={emailErrors}
                style={styles.fieldErrors}
                type="1"
              />
            )}
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
                color="gray"
                onPress={handlePasswordSecure}
              />
            </View>
            {passwordErrors.length > 0 && (
              <CustomText
                text={passwordErrors}
                style={styles.fieldErrors}
                type="1"
              />
            )}
            <View>
              {firstName && email && password ? (
                <TouchableOpacity
                  style={styles.pinkBtn}
                  onPress={handleRegister}
                >
                  <Text style={styles.textBtn}>Register</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity disabled style={styles.pinkBtn2}>
                  <Text style={styles.textBtn}>Register</Text>
                </TouchableOpacity>
              )}
            </View>
            {currentErrors.length > 0 && (
              <CustomText
                text={currentErrors}
                style={[styles.fieldErrors, { marginTop: 10 }]}
                type="1"
              />
            )}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <CustomText
                text="Already have an account? Login here"
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

export default Register;

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
    color: "black",
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
});
