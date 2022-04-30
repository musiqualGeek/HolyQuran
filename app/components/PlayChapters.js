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
import { useNavigation } from "@react-navigation/native";
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

  const AudioComp = (props) => {
    const { func, title, id } = props;
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

  return (
    <ScrollView style={{ flex: 1 }}>
      <AudioComp func={playSound1} id="1" title="Part-1" />
      <AudioComp func={playSound2} id="2" title="Part-2" />
      <AudioComp func={playSound3} id="3" title="Part-3" />
      <AudioComp func={playSound3} id="4" title="Part-4" />
      <AudioComp func={playSound3} id="5" title="Part-5" />
      <AudioComp func={playSound3} id="6" title="Part-6" />
      <AudioComp func={playSound3} id="7" title="Part-7" />
      <AudioComp func={playSound3} id="8" title="Part-8" />
      <AudioComp func={playSound3} id="9" title="Part-9" />
      <AudioComp func={playSound3} id="10" title="Part-10" />
      <AudioComp func={playSound3} id="11" title="Part-11" />
      <AudioComp func={playSound3} id="12" title="Part-12" />
      <AudioComp func={playSound3} id="13" title="Part-13" />
      <AudioComp func={playSound3} id="14" title="Part-14" />
      <AudioComp func={playSound3} id="15" title="Part-15" />
      <AudioComp func={playSound3} id="16" title="Part-16" />
      <AudioComp func={playSound3} id="17" title="Part-17" />
      <AudioComp func={playSound3} id="18" title="Part-18" />
      <AudioComp func={playSound3} id="19" title="Part-19" />
      <AudioComp func={playSound3} id="20" title="Part-20" />
      <AudioComp func={playSound3} id="21" title="Part-21" />
      <AudioComp func={playSound3} id="22" title="Part-22" />
      <AudioComp func={playSound3} id="23" title="Part-23" />
      <AudioComp func={playSound3} id="24" title="Part-24" />
      <AudioComp func={playSound3} id="25" title="Part-25" />
      <AudioComp func={playSound3} id="26" title="Part-26" />
      <AudioComp func={playSound3} id="27" title="Part-27" />
      <AudioComp func={playSound3} id="28" title="Part-28" />
      <AudioComp func={playSound3} id="29" title="Part-29" />
      <AudioComp func={playSound3} id="30" title="Part-30" />
      {/* <CurrentPlayingAudio  /> */}
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
