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
            <Text style={styles.nextText} >NEXT</Text>
          </TouchableOpacity>
          <Text style={styles.textHolyQuran}>The Holy Qur'an</Text>
          <Text style={styles.textEnglish}>
            English Translation and{"\n"}Commentary
          </Text>
          <Text style={[styles.title2, { margin: 0, }]}>by</Text>
          <Text style={[styles.title2, { margin: 0, }]} >Maulana Muhammad Ali</Text>
          <Text style={styles.title4}>Renowned author of{"\n"}several classic works on Islam</Text>
          <Text style={styles.title4} >WITH EXPANDED INDEX</Text>
          <Text style={styles.title4}>© 2011, Ahmadiyya Anjuman Isha'at Islam{"\n"}Lahore (USA) Inc.</Text>
          <Text style={styles.title4} >
            P.O. Box 3370 Dublin, Ohio 43016, U.S.A.{"\n"}Ph: 614-873-1030;
            Ph: 614-266-1030;{"\n"} e-mail: aaiil@aol.com{"\n"}Internet:
            www.muslim.org
          </Text>
          <Text style={[styles.title4, { margin: 0, }]}>
            Also available in eBook, print and{"\n"}audio formats
          </Text>
          <Text style={[styles.title4, { margin: 0, }]} >
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
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? 48 : 44,
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
    // borderColor: "black",
    // marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  nextText: {
    color: "black",
    textAlign: "right",
    marginEnd: 30,
    // marginTop: Platform.OS === "android" ? 36 : 45,
    marginVertical: 20,
    fontFamily: 'Quicksand_1'
  },
  textHolyQuran: {
    textAlign: "center",
    // fontSize: Platform.OS === "android" ? 36 : 40,
    fontSize: 28,
    color: "black",
    fontFamily: 'Quicksand_1',
    marginVertical: 5,
    // marginTop: Platform.OS === "ios" ? 24 : 0,
  },
  textEnglish: {
    textAlign: "center",
    marginTop: 20,
    // fontSize: Platform.OS === "android" ? 24 : 24,
    fontSize: 14,
    color: "black",
    fontFamily: 'Quicksand_1'
  },
  title1: {
    textAlign: "center",
    fontSize: 24,
    color: "black",
    marginVertical:   10,
    fontFamily: 'Quicksand_1'
  },
  title2: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    marginVertical:   10,
    fontFamily: 'Quicksand_1'
  },
  title3: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    marginVertical:   10,
    fontFamily: 'Quicksand_1'
  },
  title4: {
    textAlign: "center",
    fontSize: 12,
    color: "black",
    marginVertical:   10,
    fontFamily: 'Quicksand_1'
  },
  
});
