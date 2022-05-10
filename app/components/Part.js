import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const Part = (props) => {
  const { url, name, navigation } = props;
  return (
    <View style={styles.part}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ArabicPDF", {
            uri: url,
          })
        }
      >
        <CustomText text={name} style={styles.title} type="1" />
      </TouchableOpacity>
    </View>
  );
};

export default Part;

const styles = StyleSheet.create({
  part: {
    justifyContent: "center",
    width: 120,
    height: 120,
    backgroundColor: "#496F51",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "gray",
    shadowOffset: { height: 15 },
    shadowRadius: 9,
    shadowOpacity: 0.3,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    lineHeight: 25,
  },
});
