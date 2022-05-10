import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
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
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <BackRoute navigation={navigation} color="" />
      <Menu
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
          {/* <FontAwesome
            onPress={showMenu}
            name="user"
            color="#DAB53F"
            size={16}
            style={styles.iconStyle}
          /> */}
          <CustomText text="Profile" style={styles.title} type="1" />
        </MenuItem>
        <MenuItem
          onPress={() => {
            navigation.navigate("Bookmark");
            showMenu();
          }}
        >
          {/* <FontAwesome
            onPress={showMenu}
            name="bookmark"
            color="#DAB53F"
            size={16}
            style={styles.iconStyle}
          /> */}
          <CustomText text="Bookmark" style={styles.title} type="1" />
        </MenuItem>
        <MenuItem
          onPress={() => {
            navigation.navigate("Annotations");
            showMenu();
          }}
        >
          {/* <FontAwesome5
            onPress={showMenu}
            name="pen"
            color="#DAB53F"
            size={14}
            style={styles.iconStyle}
          /> */}
          <CustomText text="Annotation" style={styles.title} type="1" />
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            navigation.navigate("Service");
            showMenu();
          }}
        >
          {/* <Ionicons
            onPress={showMenu}
            name="settings-sharp"
            color="#DAB53F"
            size={16}
            style={styles.iconStyle}
          /> */}
          <CustomText text="Service" style={styles.title} type="1" />
        </MenuItem>
      </Menu>
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
});
