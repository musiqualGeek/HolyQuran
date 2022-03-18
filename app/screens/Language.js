import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";

const Language = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Alex waiting</Text>;
  } else {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.border}
          source={require("../assets/border_1.png")}
        />
        <View style={styles.borderContainer}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
              <Feather
                name="bookmark"
                color="gray"
                size={24}
                style={{ margin: Platform.OS === "android" ? 36 : 36, marginEnd: Platform.OS === "android" ? 16 : 16}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Service")}>
              <Ionicons
                name="settings-outline"
                color="gray"
                size={24}
                style={{ marginTop: Platform.OS === "android" ? 36 : 36, marginEnd: Platform.OS === "android" ? 16 : 16}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <FontAwesome5
                name="user-circle"
                color="gray"
                size={24}
                style={{ marginTop: Platform.OS === "android" ? 36 : 36, marginEnd: 36}}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/appIcon_Iphone.jpg")}
          />
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerText}>READ THE HOLY QURAN</Text>
            </View>
            <Text style={styles.selectLanguageText}>SELECT LANGUAGE</Text>
            <TouchableOpacity>
              <View style={styles.arabic}>
                <Text style={styles.textArabic}>Arabic</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.english}>
                <Text style={styles.textEnglish}>English</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={styles.readButton}>
                <Text style={styles.textRead}>READ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Language;

const styles = StyleSheet.create({
  arabic: {
    width: 300,
    height: 50,
    marginTop: 16,
    backgroundColor: "#a5acaf",
    justifyContent: "center",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "#DAB53F",
    // marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "#caccd1",
    overflow: "hidden",
    width: Platform.OS === "android" ? 300 : 300,
    height: 320,
    alignSelf: "center",
    marginTop: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
  },
  english: {
    width: 300,
    height: 50,
    marginTop: 16,
    backgroundColor: "#147b32",
    justifyContent: "center",
  },
  header: {
    width: 300,
    height: 50,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  headerText: {
    color: "#2D5C2E",
    fontSize: 24,
    fontFamily: 'Quicksand_1',
    textAlignVertical: "center",
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  readButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#147b32",
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  selectLanguageText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontFamily: 'Quicksand_2',
  },
  textArabic: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
    fontFamily: 'Quicksand_1',
  },
  textEnglish: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: 'Quicksand_1',
  },
  textRead: {
    color: "white",
    textAlign: "center",
    fontFamily: 'Quicksand_1',
    fontSize: 16,
  },
});
