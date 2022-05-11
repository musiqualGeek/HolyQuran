import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  Ionicons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import CustomText from "./CustomText";
import BackRoute from "./BackRoute";

const MenuModal = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <BackRoute navigation={navigation} color="" />
      <View style={styles.subTitleContainer}>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => navigation.navigate("Profile")}
        >
          <FontAwesome5 name="user-circle" size={20} color="gray" />
          <CustomText text="Profile" style={styles.subtitle} type="1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => navigation.navigate("Annotations")}
        >
          <AntDesign name="infocirlceo" size={20} color="gray" />
          <CustomText text="Annotations" style={styles.subtitle} type="1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => navigation.navigate("Service")}
        >
          <EvilIcons name="gear" size={24} color="gray" />
          <CustomText text="Service" style={styles.subtitle} type="1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => navigation.navigate("Bookmark")}
        >
          <Ionicons
            name="md-checkmark-circle-outline"
            size={20}
            color="black"
          />
          <CustomText text="Bookmark" style={styles.subtitle} type="1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  menu: {
    width: "40%",
    right: 70,
  },
  iconStyle: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: "#000",
    marginLeft: 25,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userIcon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
  subtitle: {
    fontSize: 12,
    color: "#000",
  },
});
