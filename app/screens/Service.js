import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { signOutUser } from "../redux/User/user.actions";
import { useDispatch } from "react-redux";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Service = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOutUser());
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
        <BackRoute navigation={navigation} color="" />
        <View style={styles.header}>
          <CustomText text="Service" style={styles.title} type="1" />
          <View style={{ width: 50 }}></View>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <CustomText text="LOGOUT" style={styles.title2} type="1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <CustomText text="CHANGE PASSWORD" style={styles.title2} type="1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Service;

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
  header: {
    width: "100%",
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    color: "#264A27",
    marginTop: 15,
  },
  logoutBtn: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 20,
    elevation: 5,
    paddingVertical: 10,
  },
  title2: {
    color: "#fff",
    textAlign: "center",
  },
});
