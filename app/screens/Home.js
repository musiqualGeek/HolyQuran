import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  
  const [input] = useState("");
  // const [results] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);

  const data = [
    { id: "1", title: "1. Al-Fatihah: THE OPENING" },
    { id: "2", title: "2. Al-Baqarah: THE COW" },
    { id: "3", title: "3. Al-Imran: THE FAMILY OF AMRAN" },
    { id: "4", title: "4. Al-Nisa: THE WOMEN" },
    { id: "5", title: "5. Al-Ma'idah: THE FOOD" },
  ];

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
            onChangeText={(text) => {
              if (searchTimer) {
                clearTimeout(searchTimer);
              }
              setInput(text);
              setSearchTimer(
                setTimeout(() => {
                  fetchData(text);
                }, 2000)
              );
            }}
            value={input}
          />
          <FlatList
            data={data}
            keyExtractor={(item) => "" + item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.title}</Text>
              </View>
            )}
          />
          <StatusBar style="auto" />
        </View>
        <Image style={styles.image} source={require("../assets/mosque.png")} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
    position: 'absolute',
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
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
});
