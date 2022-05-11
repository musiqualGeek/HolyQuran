import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Bookmark = ({ navigation, route }) => {
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

  // navigation.navigate("Verses", {
  //   verse: dataTable[verseId - 1],
  //   ourId: verseId,
  // });

  const renderItem = ({ item }) => <Item title={item.title} />;

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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          marginBottom={20}
        />
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
});
