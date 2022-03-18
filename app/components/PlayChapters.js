import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const PlayChapters = (props) => {
  return (
    <ScrollView>

    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>Chapter-1</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#d7d7d8",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
    marginStart: 16,
    marginEnd: 16,
    elevation: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#DAB53F",
    // opacity: 0.4,
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
