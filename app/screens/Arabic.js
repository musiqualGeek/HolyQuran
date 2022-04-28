import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import PdfReader from "rn-pdf-reader-js";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { isLoaded } from "expo-font";

const Bookmark = ({ navigation, route }) => {
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
          {/* <View style={styles.header}> */}
          <TouchableOpacity onPress={() => navigation.navigate("Language")}>
            <Ionicons
              name="arrow-back"
              color="#DAB53F"
              size={24}
              style={{ marginTop: 20, marginStart: 36 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Quicksand_1",
              color: "#DAB53F",
              textAlign: "center",
              marginTop: 0,
            }}
          >
            Arabic Translation{"\n"}Of Quran
          </Text>
          <View style={styles.block_1}>
          {/* <TouchableOpacity
              style={{width:50,height:40,backgroundColor:'red'}}
                onPress={()=> {console.log('hi there')}}
              >
                <Text>Oussama</Text>
              </TouchableOpacity> */}
            <View style={styles.part}>
             
              <TouchableOpacity onPress={() => navigation.navigate("ArabicPDF", {uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(1-9).pdf?alt=media&token=cf905b4d-cb11-4f61-82f9-9e7d9040d2ca"} )}>
                {/* <PdfReader
                  style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                  }}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(1-9).pdf?alt=media&token=cf905b4d-cb11-4f61-82f9-9e7d9040d2ca",
                  }}
                /> */}
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(1-9)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.part}>
              <TouchableOpacity onPress={() => navigation.navigate("ArabicPDF", {uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(9-16).pdf?alt=media&token=11952e9b-d000-4e62-963e-18295589ed8c"} )}>
                {/* <PdfReader
                  style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                  }}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(9-16).pdf?alt=media&token=11952e9b-d000-4e62-963e-18295589ed8c",
                  }}
                /> */}
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(9-16)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.block_2}>
            <View style={styles.part}>
              <TouchableOpacity onPress={() => navigation.navigate("ArabicPDF", {uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(16-22).pdf?alt=media&token=a9ee6419-fafc-423f-8e33-b644296d3fde"} )}>
                {/* <PdfReader
                  style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                  }}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(16-22).pdf?alt=media&token=a9ee6419-fafc-423f-8e33-b644296d3fde",
                  }}
                /> */}
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(16-22)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.part}>
              <TouchableOpacity onPress={() => navigation.navigate("ArabicPDF", {uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(22-27).pdf?alt=media&token=899834af-baab-4ba2-8e04-4f9aaba79809"} )}>
                {/* <PdfReader
                  style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                  }}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(22-27).pdf?alt=media&token=899834af-baab-4ba2-8e04-4f9aaba79809",
                  }}
                /> */}
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                    fontWeight: "bold",
                    lineHeight: 25,
                  }}
                >
                  AUDIO PART{"\n"}(22-27)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.part}>
            <TouchableOpacity onPress={() => navigation.navigate("ArabicPDF", {uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(27-30).pdf?alt=media&token=8b3b9a7f-1904-4fe9-94d6-96c75c618cb9"} )}>
              {/* <PdfReader
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(27-30).pdf?alt=media&token=8b3b9a7f-1904-4fe9-94d6-96c75c618cb9",
                }}
              /> */}
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                  fontWeight: "bold",
                  lineHeight: 25,
                }}
              >
                AUDIO PART{"\n"}(27-30)
              </Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
};

export default Bookmark;

const styles = StyleSheet.create({
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  block_1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  block_2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  borderContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "#DAB53F",
    // marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-around",
    // alignSelf: "flex-start",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  part: {
    justifyContent: "center",
    width: 120,
    height: 120,
    backgroundColor: "#496F51",
    alignSelf: "center",
    marginTop: 48,
    borderRadius: 20,
    elevation: 5,
  },
});
