import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { FC, ReactElement, useState } from "react";
import Parse from "parse/react-native";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Ionicons
            name="arrow-back"
            color="#DAB53F"
            size={24}
            style={{ margin: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: -50,
            color: "#DAB53F",
          }}
        >
          Forgot Password
        </Text>

        <View style={styles.card}>
          <Text
            style={{
              marginTop: 45,
              marginStart: 20,
              marginEnd: 20,
              color: "#DAB53F",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {"Please enter your account email to reset your password:"}
          </Text>
          <TextInput
            style={{
              width: "90%",
              height: 45,
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 40,
              paddingStart: 20,
              justifyContent: "center",
              alignSelf: "center",
            }}
            placeholder={"Your account email"}
          />
          <TouchableOpacity onPress={() => doUserPasswordReset()}>
            <View
              style={{
                backgroundColor: "#DAB53F",
                width: "60%",
                height: 45,
                marginTop: 45,
                borderRadius: 10,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#264A27",
                  fontWeight: "bold",
                }}
              >
                {"Submit"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.imageMosque}
          source={require("../assets/mosque.png")}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
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
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 100,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
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
    backgroundColor: "#2D5C2E",
  },
});
