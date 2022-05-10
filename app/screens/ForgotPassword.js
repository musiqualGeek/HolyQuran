import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { recoveryUser } from "../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

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

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
      <BackRoute navigation={navigation} color="" />
        <CustomText text="Forgot Password?" style={styles.title1} type="1" />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={setEmail}
        />
        {errorsField.length > 0 && (
          <CustomText text={errorsField} style={styles.fieldErrors} type="1" />
        )}
        {email.length > 0 ? (
          <TouchableOpacity
            style={styles.thisButonStyle}
            onPress={handleRecovery}
          >
            <CustomText text="Recover" style={styles.textBtn} type="1" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.thisButonStyle2}>
            <CustomText text="Recover" style={styles.textBtn} type="1" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ForgotPassword;

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
  title1: {
    fontSize: 24,
    marginTop: 30,
    textAlign: "center",
  },
  input: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    marginTop: 50,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fieldErrors: {
    color: "red",
    fontSize: 12,
    marginVertical: 10,
    textAlign: "center",
  },
  textBtn: {
    color: "white",
    alignSelf: "center",
    fontSize: 18,
  },
  thisButonStyle: {
    backgroundColor: "#496F51",
    padding: 10,
    marginTop: 0,
    width: "80%",
    alignSelf: "center",
    borderRadius: 15,
  },
  thisButonStyle2: {
    backgroundColor: "grey",
    padding: 10,
    marginTop: 0,
    width: "80%",
    alignSelf: "center",
    borderRadius: 15,
  },
});
