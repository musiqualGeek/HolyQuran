import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";
import quoran from "../assets/quoran.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

var DATA = [];
const Bookmark = ({ navigation, route }) => {
  const [bookmark, setBookmark] = useState([])
  const Item = ({ id, title }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Verses", {
            verse: quoran[id - 1],
            ourId: id,
          });
        }}
      >
        <View style={styles.item}>
          <Text style={{ color: "white" }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;

  const existInTab = (tab, a) => {
    let i = 0;
    while (i < tab.length) {
      if (tab[i].id === a) return true;
      i++;
    }
    return false;
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@holy_quran_Key");
      let arr = JSON.parse(value);
      for (let i = 0; i < arr.length; i++) {
        let obj = {
          id: arr[i],
          title: quoran[arr[i] - 1].chapter,
        };
        if (!existInTab(DATA, arr[i])) DATA.push(obj);
      }
      setBookmark(DATA)
    } catch (e) {
      console.error("error bookmark => ",e)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <View style={styles.borderContainer}>
        <BackRoute navigation={navigation} color="" />
        <View style={styles.header}>
          <CustomText text="Bookmark" style={styles.title} type="1" />
        </View>
        {bookmark.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            marginBottom={20}
          />
        ) : (
          <View style={styles.nobookmarkContainer}>
            <CustomText
              text="No Bookmarks yet"
              style={styles.nobookmark}
              type="1"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Bookmark;

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
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "#264A27",
  },
  // Sorted
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
  nobookmarkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nobookmark: {
    textAlign: "center",
    fontSize: 18,
  },
});
