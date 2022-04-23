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
import React, { useEffect, useState } from "react";
import { recoveryUser } from "../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
// import React, { FC, ReactElement, useState } from "react";

const mapState = ({ user }) => ({
  propertyRecoverySuccess: user.propertyRecoverySuccess,
  errors: user.errors,
});

const ForgotPassword = ({ navigation }) => {
  const { propertyRecoverySuccess, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errorsField, setErrorsField] = useState("");

  useEffect(() => {
    if (propertyRecoverySuccess) navigation.navigate("Splashscreen");

    if (errors) setErrorsField(errors);
  }, [propertyRecoverySuccess]);

  const handleRecovery = () => {
    dispatch(recoveryUser(email));
  };

  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
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
            />
          </TouchableOpacity>
        </View>
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
        {errorsField.length > 0 && (
          <Text style={styles.fieldErrors}>{errorsField}</Text>
        )}
        {email.length > 0 ? (
          <TouchableOpacity
            style={styles.thisButonStyle}
            onPress={handleRecovery}
          >
            <Text style={styles.textBtn}>Recover</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.thisButonStyle2}>
            <Text style={styles.textBtn}>Recover</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
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
  thisButonStyle: {
    backgroundColor: "#496F51",
    padding: 0,
    marginTop: 0,
    width: "80%",
    height: 55,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  thisButonStyle2: {
    backgroundColor: "grey",
    padding: 0,
    marginTop: 0,
    width: "80%",
    height: 55,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  textBtn: {
    color: "white",
    textAlignVertical: "center",
    alignSelf: "center",
  },
});
