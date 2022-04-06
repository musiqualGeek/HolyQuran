import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Searchbar } from "react-native-paper";
import HighlightText from "@sanar/react-native-highlight-text";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { isLoaded } from "expo-font";

// const superTable = ['\u1d43']

const Verses = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  // const [chapter, setChapter] = useState(null)
  // const [verse, setVerse] = useState(null)
  // useEffect(() => {
  //   console.log('\\')
  //   if(route?.params?.verse?.chapter) setChapter(route.params.verse.chapter)
  //   if(route?.params?.verse?.verse) setVerse(route.params.verse.verse)
  // }, [])
  // const highlightText = string => (
  //     <Text style={styles.highlightText}>{string}</Text>
  // );
  // const replaceSuperLetter = () => {
  //   for (let i = 0; i < superTable?.length ; i++) {
  //     let res = verse.replace(/\u1d43/gi, "\"{highlightText('\u1d43')}\"");  
  //     console.log('response => ', res)
  //   }
  // }
  // useEffect(() => {
  //   if(verse)
  //   replaceSuperLetter()
  // }, [chapter, verse])
  const [search, setSearch] = useState("");
  

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
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Ionicons
                name="arrow-back"
                color="gray"
                size={24}
                style={{ marginStart: 24 }}
                // style={{ position: "absolute", right: 24 }}
                // style={{marginStart: -20, marginTop: Platform.OS === "android" ? 0 : 0}}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 24,
                fontFamily: "Quicksand_1",
                marginTop: -5,
                color: "#264A27",
                position: "absolute",
                right: Platform.OS === "android" ? 145 : 160,
              }}
            >
              Verses
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Verses")}>
              <FontAwesome
                name="bookmark-o"
                color="gray"
                size={24}
                style={{
                  position: "absolute",
                  right: Platform.OS === "android" ? -280 : -310,
                  marginTop: Platform.OS === "android" ? 2 : 0,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBox}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
            />
          </View>
          <Text
              style={{
                maxWidth: "100%",
                color: "white",
                fontSize: Platform.OS === "android" ? 18 : 16,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                fontWeight: "bold",
                alignSelf: "center",
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginStart: 10,
                marginEnd: 10,
                marginTop: 20,
                color: "#ff4c4c",
              }}
            >
              {route.params.verse.chapter}
            </Text>
          <Text
              style={{
                maxWidth: "100%",
                color: "white",
                fontSize: 12,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                fontWeight: "bold",
                alignSelf: "center",
                marginStart: 10,
                marginEnd: 10,
                color: "green",
              }}
            >
              {route.params.verse.info}
            </Text>
          <ScrollView style={{ flex: 1, marginBottom: 20, marginTop: 20 }}>
          <Text
              style={{
                maxWidth: "100%",
                color: "white",
                textAlign: 'justify',
                fontSize: Platform.OS === "android" ? 15 : 16,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                alignSelf: "center",
                paddingHorizontal: 20,
                marginStart: 10,
                marginEnd: 10,
                marginTop: 10,
                color: "black",
              }}
            >
              {route.params.verse.intro}
            </Text>
            <HighlightText
              style={{
                textAlign: 'justify',
                marginStart: 16,
                marginEnd: 16,
                marginTop: 0,
                paddingHorizontal: 16,
                fontSize: Platform.OS === "android" ? 15 : 16,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
              }}
              selectable={true}
              highlightStyle={{ backgroundColor: "yellow" }}
              searchWords={[search]}
              textToHighlight={route.params.verse.verse}
              // highlightComponent={<Text
              //   style={{
              //     maxWidth: "100%",
              //     color: "white",
              //     fontSize: Platform.OS === "android" ? 15 : 16,
              //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
              //     paddingHorizontal: 20,
              //     paddingVertical: 20,
              //     marginStart: 10,
              //     marginEnd: 10,
              //     marginTop: 5,
              //     color: "#000",
              //   }}
              // >
              //   {verse}
              // </Text>}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default Verses;

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
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  searchBox: {
    width: "80%",
    alignSelf: "center",
    marginTop: 36,
  },
  highlightText:{
    color: 'red',
  },
});
