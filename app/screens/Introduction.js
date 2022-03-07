import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
        <View style={styles.borderContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Language")}>
            <Text
              style={{
                color: "white",
                textAlign: "right",
                marginEnd: 16,
                marginTop: 16,
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
              color: "white",
              marginTop: 24,
              fontFamily: 'Quicksand_1'
            }}
          >
            by
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              color: "white",
              fontFamily: 'Quicksand_1'
            }}
          >
            Maulana Muhammad Ali
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
              marginTop: 5,
              fontFamily: 'Quicksand_1'
            }}
          >
            Renowned author of{"\n"}several classic works on Islam
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "white",
              marginTop: 48,
              fontFamily: 'Quicksand_1'
            }}
          >
            WITH EXPANDED INDEX
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 18,
              fontFamily: 'Quicksand_1'
            }}
          >
            © 2011, Ahmadiyya Anjuman Isha'at Islam{"\n"}Lahore (USA) Inc.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              position: "absolute",
              bottom: 0,
              marginBottom: 130,
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
              color: "white",
              position: "absolute",
              bottom: 0,
              marginBottom: 70,
              justifyContent: "center",
              alignSelf: "center",
              fontFamily: 'Quicksand_1'
            }}
          >
            Also available in eBook, print and audio formats
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
              position: "absolute",
              bottom: 0,
              marginBottom: 16,
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
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
  textEnglish: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 24,
    color: "white",
    fontFamily: 'Quicksand_1'
  },
  textHolyQuran: {
    textAlign: "center",
    fontSize: 40,
    color: "white",
    fontFamily: 'Quicksand_1'
  },
});
