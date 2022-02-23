import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Verses = ({ navigation, route }) => {
  useEffect(() => {
    console.log("from vers", route.params.verse);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
              marginStart: 75,
              color: "#DAB53F",
            }}
          >
            Verses
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Verses")}>
            <FontAwesome
              name="bookmark"
              color="#DAB53F"
              size={24}
              style={{ margin: 20, position: "absolute", right: -140 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Text
            style={{
              maxWidth: "100%",
              color: "white",
              fontSize: 18,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            {route.params.verse.verse}
          </Text>
        </ScrollView>
        <Image
          style={styles.imageMosque}
          source={require("../assets/mosque.png")}
        />
      </View>
    </View>
  );
};

export default Verses;

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
  header: {
    flexDirection: "row",
  },
  imageMosque: {
    width: "100%",
    height: 250,
    position: "absolute",
    bottom: 0,
    // justifyContent: "center",
    // alignSelf: "center",
    marginTop: -15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
});
