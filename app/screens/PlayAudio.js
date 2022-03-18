import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import PlayParts from "../components/PlayChapters";

export default function PlayAudio() {
  return (
    <ScrollView>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
