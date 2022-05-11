import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Searchbar } from "react-native-paper";
import HighlightText from "@sanar/react-native-highlight-text";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CustomText from "../components/CustomText";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import quoran from "../assets/quoran.json";

const Tab = createMaterialTopTabNavigator();

const Verses = ({ navigation, route }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);
  const [search, setSearch] = useState("");
  const [yScroll1, setyScroll1] = useState(0);
  const [yScroll2, setyScroll2] = useState(0);

  // const handleScroll = (e) => {
  //   setyScroll(e.nativeEvent.contentOffset.y);
  // };

  const VersIntro = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}
        // onScroll={(e) => setyScroll1(e.nativeEvent.contentOffset.y)}
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
        // onScroll={(e) => setyScroll2(e.nativeEvent.contentOffset.y)}
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

  const saveBookmark = async () => {
    const value = await AsyncStorage.getItem("@holy_quran_Key");
    try {
      if (!isOpen) {
        // this 1 bookmark-o => bookmark
        if (value === null) {
          let arr = [route.params.ourId];
          console.log("array => ", arr);
          const jsonValue = JSON.stringify(arr);
          console.log("jsonValue => ", jsonValue);
          await AsyncStorage.setItem("@holy_quran_Key", jsonValue);
          setSaveSuccess(true);
        } else {
          // let arr = parse(value)
          console.log('Areray here 2 ', arr)
        }
      } else {
        // this 2 bookmark => bookmark-o
        console.log("remove saved bookmark");
        setSaveSuccess(true);
      }
    } catch (e) {
      setSaveSuccess(false);
    }
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@holy_quran_Key");
      console.log(" value => ", value);
      if (value !== null) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } catch (e) {
      // error reading value
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("@holy_quran_Key");
    } catch (e) {}
  };

  useEffect(() => {
    // removeData();
    getData();
  }, []);

  useEffect(() => {
    console.log(" =)> =)> ", yScroll1);
    console.log(" =)> =)> ", yScroll2);
  }, [yScroll1, yScroll2]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          {isOpen ? (
            <CustomText
              // text={saveSuccess ? "Bookmark Saved" : "Please try again later"}
              text="Bookmark Saved"
              style={styles.modalText}
              type="1"
            />
          ) : (
            <CustomText
              text="Bookmark Unsaved"
              style={styles.modalText}
              type="1"
            />
          )}
        </View>
      </Modal>
      <View style={styles.borderContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color="gray" size={24} />
          </TouchableOpacity>
          <CustomText text="Verses" style={styles.title1} type="1" />
          <TouchableOpacity
            onPress={() => {
              setIsOpen(!isOpen);
              saveBookmark();
            }}
          >
            <FontAwesome
              name={isOpen ? "bookmark" : "bookmark-o"}
              // name={"bookmark"}
              color="gray"
              size={24}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#222",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    opacity: 0.9,
  },
});
