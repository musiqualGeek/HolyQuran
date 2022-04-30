import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/quicksand";

const Introduction = ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.navigate("Language")}>
            <Text
              style={{
                color: "gray",
                textAlign: "right",
                marginEnd: 36,
                marginTop: Platform.OS === "android" ? 36 : 45,
                fontFamily: 'Quicksand_1'
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
          <Text style={styles.textHolyQuran}>The Holy Qur'an</Text>
          <Text style={styles.textEnglish}>
            English Translation and{"\n"}Commentary
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "black",
              marginTop: 24,
              fontFamily: 'Quicksand_1'
            }}
          >
            by
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: Platform.OS === "android" ? 24 : 24,
              color: "black",
              fontFamily: 'Quicksand_1',
              marginTop: Platform.OS === "android" ? 0 : 10,
            }}
          >
            Maulana Muhammad Ali
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: Platform.OS === "android" ? 20 : 20,
              color: "black",
              marginTop: Platform.OS === "android" ? 10 : 30,
              fontFamily: 'Quicksand_1'
            }}
          >
            Renowned author of{"\n"}several classic works on Islam
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "black",
              marginTop: 30,
              fontFamily: 'Quicksand_1'
            }}
          >
            WITH EXPANDED INDEX
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: Platform.OS === "android" ? 15 : 16,
              color: "black",
              marginTop: Platform.OS === "android" ? 10 : 24,
              fontFamily: 'Quicksand_1'
            }}
          >
            © 2011, Ahmadiyya Anjuman Isha'at Islam{"\n"}Lahore (USA) Inc.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: Platform.OS === "android" ? 16 : 16,
              color: "black",
              position: "absolute",
              bottom: 0,
              marginBottom: Platform.OS === "android" ? 170 : 200,
              justifyContent: "center",
              alignSelf: "center",
              fontFamily: 'Quicksand_1'
            }}
          >
            P.O. Box 3370 Dublin, Ohio 43016, U.S.A.{"\n"}Ph: 614-873-1030;
            Ph: 614-266-1030;{"\n"} e-mail: aaiil@aol.com{"\n"}Internet:
            www.muslim.org
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "black",
              position: "absolute",
              bottom: 0,
              marginBottom: Platform.OS === "android" ? 100 : 120,
              justifyContent: "center",
              alignSelf: "center",
              fontFamily: 'Quicksand_1'
            }}
          >
            Also available in eBook, print and{"\n"}audio formats
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "black",
              position: "absolute",
              bottom: 0,
              marginBottom: Platform.OS === "android" ? 30 : 50,
              justifyContent: "center",
              alignSelf: "center",
              fontFamily: 'Quicksand_1'
            }}
          >
            ISBN-13: 978-1-9342-7114-8
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Introduction;

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "black",
    // marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  textEnglish: {
    textAlign: "center",
    marginTop: 30,
    fontSize: Platform.OS === "android" ? 24 : 24,
    color: "black",
    fontFamily: 'Quicksand_1'
  },
  textHolyQuran: {
    textAlign: "center",
    fontSize: Platform.OS === "android" ? 36 : 40,
    color: "black",
    fontFamily: 'Quicksand_1',
    marginTop: Platform.OS === "ios" ? 24 : 0,
  },
});
