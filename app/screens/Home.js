import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";
// import { chapters } from "../../server.js";

const data = [
  { id: "1", title: "1. Al-Fatihah: THE OPENING" },
  { id: "2", title: "2. Al-Baqarah: THE COW" },
  { id: "3", title: "3. Al-Imran: THE FAMILY OF AMRAN" },
  { id: "4", title: "4. Al-Nisa: THE WOMEN" },
  { id: "5", title: "5. Al-Ma'idah: THE FOOD" },
];

const dataTable = [
  {
    verse:
      "Ina the name of Allåh,b the Beneficent, the Merciful.c\n" +
      "1.  Praise be to Allåh, the Lorda of the worlds,b\n" +
      "2.  The Beneficent, the Merciful,\n" +
      "3.  Mastera of the day of Requital.b\n" +
      "4.  Thee do we serve and Thee do we beseech for help.a\n" +
      "5.  Guide us ona the right path,\n" +
      "6.  The path of those upon whom Thou hast bestowed favours,a\n" +
      "7.  Not those upon whom wrath is brought down, nor those who go astray. \n",
  },
];

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      let after = data.filter(checkWord);
      let array2 = [];
      console.log("after => ", after);
      if (after.length > 0) {
        for (let i = 0; i < 10; i++) {
          if (after[i]) {
            array2.push(after[i]);
          }
        }
        setSearchArray(array2);
      } else {
        setSearchArray([]);
      }
    }
    if (search.length === 0) {
      setSearchArray([]);
    }
  }, [search]);

  const checkWord = (item) => {
    let ch = item.title.substr(0, search.length).toUpperCase();
    let ch2 = search.toUpperCase();
    if (ch == ch2) return true;
    return false;
  };
  const handleVerse = (id) => {
    console.log("Id from handleVerse", id);
    let verseId = parseInt(id);
    navigation.navigate("Verses", { verse: dataTable[verseId - 1] });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Language")}>
          <Ionicons
            name="arrow-back"
            color="#DAB53F"
            size={24}
            style={{ margin: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "#DAB53F",
            marginTop: -50,
          }}
        >
          QURAN CHAPTERS
        </Text>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
          {searchArray.length > 0 ? (
            <FlatList
              data={searchArray}
              keyExtractor={(item) => "" + item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleVerse(item.id)}
                  style={styles.listItem}
                >
                  <Text style={styles.listItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => "" + item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleVerse(item.id)}
                  style={styles.listItem}
                >
                  <Text style={styles.listItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          )}
          <Image
            style={styles.image}
            source={require("../assets/mosque.png")}
          />
          <StatusBar style="auto" />
        </View>
        {/* <ImageBackground
          style={[styles.fixed, styles.bgcontainter, { zIndex: -1 }]}
          source={require("../assets/mosque.png")}
        /> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#2D5C2E",
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
  container: {
    marginTop: 16,
    flex: 1,
    backgroundColor: "#2D5C2E",
    marginStart: 20,
    marginEnd: 20,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 250,
    position: "absolute",
    bottom: 0,
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#DAB53F",
    width: "100%",
  },
  listItemText: {
    fontSize: 16,
  },
  //   bgContainter: {
  //     width: Dimensions.get('window').width, //for full screen
  //     height: Dimensions.get('window').height, //for full screen
  //   },
  //   fixed: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //   },
});
