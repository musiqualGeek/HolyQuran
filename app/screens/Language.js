import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import CustomText from "../components/CustomText";
import MenuModal from "../components/MenuModal";

const Language = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <ScrollView style={styles.borderContainer}>
        <MenuModal navigation={navigation} />
        <View style={styles.imageTopContainer}>
          <Image
            style={styles.imageTop}
            source={require("../assets/appIcon_Iphone.jpg")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <CustomText text="WELCOME TO" style={styles.textWelcome} type="1" />
          <CustomText text="The Holy Quran" style={styles.textQuran} type="1" />
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate("Arabic")}
          >
            <CustomText text="Arabic" style={styles.textWelcome} type="1" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <CustomText text="English" style={styles.textWelcome} type="1" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Language;

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
    borderRadius: 8,
  },
  card: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#496F51",
    width: "80%",
    alignSelf: "center",
    elevation: 3,
    marginBottom: 20,
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
  btnContainer: {
    backgroundColor: "#DAB53F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 20,
  },
});
