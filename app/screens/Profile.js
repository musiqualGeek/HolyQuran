import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { auth } from "../../firebase/utils";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
      <BackRoute navigation={navigation} color="" />
        <View style={styles.header}>
          <CustomText text="Profile" style={styles.title1} type="1" />
          <CustomText text="Name" style={styles.title2} type="1" />
          <View style={styles.nameContainer}>
            <CustomText
              text={
                auth.currentUser.displayName
                  ? auth.currentUser.displayName
                  : "..."
              }
              style={styles.title3}
              type="1"
            />
          </View>
          <CustomText text="E-mail" style={styles.title2} type="1" />
          <View style={styles.nameContainer}>
            <CustomText
              text={auth.currentUser.email ? auth.currentUser.email : "..."}
              style={styles.title3}
              type="1"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "Quicksand_1",
    color: "#264A27",
    marginTop: 10,
  },
  title2: {
    fontSize: 18,
    color: "#264A27",
    marginTop: 20,
    marginLeft: 30,
  },
  title3: {
    textAlign: "center",
    color: "white",
    fontFamily: "Quicksand_1",
    fontSize: 16,
  },
  // Sorted
  emailContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  nameContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
