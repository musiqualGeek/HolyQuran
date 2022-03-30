import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";
import Verse1 from "../assets/verseAudio.mp3";
import Verse2 from "../assets/verseAudio2.mp3";
import Verse3 from "../assets/verseAudio3.mp3";

import { FontAwesome } from "@expo/vector-icons";
const PlayChapters = (props) => {
  var Verse1 = "../assets/verseAudio.mp3";
  var Verse2 = "../assets/verseAudio2.mp3";
  var Verse3 = "../assets/verseAudio3.mp3";
  var Verse4 = "../assets/verseAudio4.mp3";
  var Verse5 = "../assets/verseAudio5.mp3";
  const [sound, setSound] = React.useState();

  async function playSound1() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(Verse1));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playSound2() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(Verse2));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playSound3() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(Verse3));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playSound4() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(Verse4));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function playSound5() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(Verse5));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ScrollView>
      <TouchableOpacity onPress={playSound1}>
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
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound2}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Chapter-2</Text>
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
      <TouchableOpacity onPress={playSound3}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Chapter-3</Text>
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
      <TouchableOpacity onPress={playSound4}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Chapter-4</Text>
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
      <TouchableOpacity onPress={playSound5}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Chapter-5</Text>
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
    marginTop: 16,
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
