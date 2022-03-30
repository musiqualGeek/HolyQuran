import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import PlayChapters from "../components/PlayChapters";

export default function PlayAudio() {
  return (
    <ScrollView>
      <TouchableOpacity>
        <PlayChapters />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
