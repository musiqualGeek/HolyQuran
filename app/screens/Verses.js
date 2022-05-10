import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import HighlightText from "@sanar/react-native-highlight-text";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CustomText from "../components/CustomText";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Verses = ({ navigation, route }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");
  var ourPosition = 0;
  const handleScroll = (e) => {
    ourPosition = e.nativeEvent.contentOffset.y;
  };

  const VersIntro = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}
        onScroll={handleScroll}
      >
        <HighlightText
          style={styles.highlightContainer}
          selectable={true}
          highlightStyle={{ backgroundColor: "yellow" }}
          searchWords={[search]}
          textToHighlight={route.params.verse.intro}
        />
      </ScrollView>
    );
  };
  const VersContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}
        onScroll={handleScroll}
      >
        <HighlightText
          style={styles.highlightContainer}
          selectable={true}
          highlightStyle={{ backgroundColor: "yellow" }}
          searchWords={[search]}
          textToHighlight={route.params.verse.verse}
        />
      </ScrollView>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color="gray" size={24} />
          </TouchableOpacity>
          <CustomText text="Verses" style={styles.title1} type="1" />
          <FontAwesome
            onPress={() => {
              setIsOpen(false);
            }}
            name={isOpen ? "bookmark" : "bookmark-o"}
            color="gray"
            size={24}
          />
        </View>
        <View style={styles.searchBox}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </View>
        <CustomText
          text={route.params.verse.chapter}
          style={styles.title2}
          type="1"
        />
        <CustomText
          text={route.params.verse.info}
          style={styles.title3}
          type="1"
        />
        <View style={styles.tabContainer}>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "black",
              indicatorStyle: { backgroundColor: "#496F51", height: "100%" },
              pressOpacity: 1,
              style: {
                backgroundColor: "white",
                height: 50,
                borderBottomColor: "white",
                borderBottomWidth: 2,
              },
            }}
            initialRouteName="Chapters"
          >
            <Tab.Screen name="Verse Intro" component={VersIntro} />
            <Tab.Screen name="Verse Content" component={VersContent} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default Verses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    marginVertical: 10,
    marginTop: 28,
    marginBottom: 28,
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  title1: {
    alignItems: "center",
    fontSize: 24,
    color: "#264A27",
  },
  searchBox: {
    width: "80%",
    alignSelf: "center",
    marginTop: 36,
  },
  title2: {
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 20,
    color: "#264A27",
  },
  title3: {
    fontSize: 12,
    alignSelf: "center",
    color: "#264A27",
    marginBottom: 20,
  },
  mainScroll: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 25,
  },
  highlightContainer: {
    textAlign: "justify",
    fontSize: 16,
    alignSelf: "center",
    paddingHorizontal: 0,
    marginBottom: 30,
    color: "black",
  },
  tabContainer: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
  },
});
