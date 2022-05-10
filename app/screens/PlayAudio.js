import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import PlayChapters from "../components/PlayChapters";

const PlayAudio = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <PlayChapters navigation={navigation} />
    </ScrollView>
  );
};

export default PlayAudio;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});
