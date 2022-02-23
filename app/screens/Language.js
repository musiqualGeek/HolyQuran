import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Language = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate("Bookmark")}>
            <FontAwesome
              name="bookmark"
              color="#DAB53F"
              size={24}
              style={{ margin: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Service")}>
            <Ionicons
              name="settings-sharp"
              color="#DAB53F"
              size={24}
              style={{ margin: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <FontAwesome
              name="user-circle"
              color="#DAB53F"
              size={24}
              style={{ margin: 16 }}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/app_logo.png")}
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
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  arabic: {
    width: 320,
    height: 50,
    marginTop: 16,
    backgroundColor: "#a5acaf",
    justifyContent: "center",
  },
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
    backgroundColor: "#caccd1",
    overflow: "hidden",
    width: 320,
    height: 320,
    alignSelf: "center",
    marginTop: 50,
    shadowRadius: 10,
    shadowRadius: 2,
    elevation: 3,
  },
  english: {
    width: 320,
    height: 50,
    marginTop: 16,
    backgroundColor: "#2D5C2E",
    justifyContent: "center",
  },
  header: {
    width: 320,
    height: 50,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  headerText: {
    color: "#2D5C2E",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 250,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
  readButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#2D5C2E",
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  selectLanguageText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
  textArabic: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
  },
  textEnglish: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  textRead: {
    color: "#DAB53F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
