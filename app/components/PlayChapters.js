import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import BackRoute from "./BackRoute";

const PlayChapters = (props) => {
  const items = [];

  useEffect(() => {
    console.log("Items ");
    console.log(items);
  }, [items]);
  const AudioComp = (props) => {
    const { title, id } = props;
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Player", {
            partTitle: title,
            id: id,
          });
        }}
      >
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{title}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome
                name="volume-up"
                color="gray"
                size={24}
                style={{ margin: 16 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  for (let i = 0; i < 30; i++) {
    console.log(`Part-${i + 1}`);
    items.push(<AudioComp key={i} id={i} title={`Part-${i + 1}`} />);
  }

  return (
    <>
      <ScrollView style={{ flex: 1, paddingBottom: 20 }}>
        {items}
        {/* <AudioComp id={0} title="Part-1" />
        <AudioComp id={1} title="Part-2" />
        <AudioComp id={2} title="Part-3" />
        <AudioComp id={3} title="Part-4" />
        <AudioComp id={4} title="Part-5" />
        <AudioComp id={5} title="Part-6" />
        <AudioComp id={6} title="Part-7" />
        <AudioComp id={7} title="Part-8" />
        <AudioComp id={8} title="Part-9" />
        <AudioComp id={9} title="Part-10" />
        <AudioComp id={10} title="Part-11" />
        <AudioComp id={11} title="Part-12" />
        <AudioComp id={12} title="Part-13" />
        <AudioComp id={13} title="Part-14" />
        <AudioComp id={14} title="Part-15" />
        <AudioComp id={15} title="Part-16" />
        <AudioComp id={16} title="Part-17" />
        <AudioComp id={17} title="Part-18" />
        <AudioComp id={18} title="Part-19" />
        <AudioComp id={19} title="Part-20" />
        <AudioComp id={20} title="Part-21" />
        <AudioComp id={21} title="Part-22" />
        <AudioComp id={22} title="Part-23" />
        <AudioComp id={23} title="Part-24" />
        <AudioComp id={24} title="Part-25" />
        <AudioComp id={25} title="Part-26" />
        <AudioComp id={26} title="Part-27" />
        <AudioComp id={27} title="Part-28" />
        <AudioComp id={28} title="Part-29" />
        <AudioComp id={29} title="Part-30" /> */}
        {/* <CurrentPlayingAudio  /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#d7d7d8",
    paddingVertical: 0,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#496F51",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemText2: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#496F51",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default PlayChapters;
