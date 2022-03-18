import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import PlayParts from "../components/PlayParts";

export default function Parts() {
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
      <TouchableOpacity>
        <PlayParts />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
