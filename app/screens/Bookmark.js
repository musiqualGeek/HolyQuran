import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/quicksand";
import { isLoaded } from "expo-font";

const Bookmark = ({ navigation, route }) => {

  const handleBookmark = ({})

  const DATA = [
    {
      id: "1",
      title: "Chapter-1 : THE OPENING",
    },
    {
      id: "2",
      title: "Chapter-2 : THE COW",
    },
    {
      id: "3",
      title: "Chapter-3 : THE FAMILY OF AMRAN",
    },
    {
      id: "4",
      title: "Chapter-4 : THE WOMEN",
    },
    {
      id: "5",
      title: "Chapter-5 : THE FOOD",
    },
    {
      id: "6",
      title: "Chapter-6 : THE CATTLE",
    },
    {
      id: "7",
      title: "Chapter-7 : THE ELEVATED PLACES",
    },
    {
      id: "8",
      title: "Chapter-8 : VOLUNTARY GIFTS",
    },
    {
      id: "9",
      title: "Chapter-9 : THE IMMUNITY",
    },
    {
      id: "10",
      title: "Chapter-10 : JONAH",
    },
  ];

  const Item = ({ title }) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={{ color: "white" }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <Item title={item.title} />;

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
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Language")}>
              <Ionicons
                name="arrow-back"
                color="gray"
                size={28}
                style={{ marginTop: 20, marginStart: 36 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: 24,
                fontFamily: "Quicksand_1",
                color: "#264A27",
                marginStart: 80,
                marginTop: 15,
              }}
            >
              Bookmark
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            marginBottom={20}
          />
        </View>
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
    marginBottom: 10,
    // justifyContent: "space-around",
    // alignSelf: "flex-start",
  },
  listItem: {
    flex: 0.05,
    alignSelf: "center",
    marginTop: 36,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#496F51",
    width: "80%",
    marginStart: 36,
    marginEnd: 36,
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  listItemText: {
    fontSize: 16,
    fontFamily: "Quicksand_1",
    color: "white",
    alignSelf: "center",
    marginTop: 2,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 48 : 44,
  },
  item: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#496F51",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 5,
  },
});
