import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import CustomText from "./CustomText";
import BackRoute from "./BackRoute";

const MenuModal = (props) => {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return (
    <View
      style={{
        // flexDirection: "row",
        // justifyContent: "space-between",
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
      {/* <Menu
        visible={visible}
        onRequestClose={hideMenu}
        anchor={
          <Entypo
            onPress={() => showMenu()}
            name="dots-three-vertical"
            color="gray"
            size={24}
            style={{
              marginVertical: 15,
              marginRight: 40,
              alignSelf: "flex-end",
            }}
          />
        }
        style={styles.menu}
      >
        <MenuItem
          onPress={() => {
            navigation.navigate("Profile");
            showMenu();
          }}
        >
          <CustomText text="Bookmark" style={styles.title} type="1" />
        </MenuItem>
        <MenuItem
          onPress={() => {
            navigation.navigate("Annotations");
            showMenu();
          }}
        >
          <CustomText text="Annotation" style={styles.title} type="1" />
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            navigation.navigate("Service");
            showMenu();
          }}
        >
          
          <CustomText text="Service" style={styles.title} type="1" />
        </MenuItem>
      </Menu> */}
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
