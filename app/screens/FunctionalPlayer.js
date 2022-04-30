import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";

import Verse1 from "../assets/verseAudio.mp3";
import Verse2 from "../assets/verseAudio2.mp3";
import Verse3 from "../assets/verseAudio3.mp3";
import Verse4 from "../assets/verseAudio4.mp3";
import Verse5 from "../assets/verseAudio5.mp3";

const PlayerFunct = ({ navigation, route }) => {
  const sound = React.useRef(new Audio.Sound());
  const { partTitle, id } = route.params;
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [trackLength, setTrackLength] = useState(2115);
  const [timeElapsed, setTimeElapsed] = useState("0:00");
  const [timeRemaining, setTimeRemaining] = useState("5:00");
  const [playOrPause, setPlayOrPause] = useState(false);
  const [played, setPlayed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const dummyData = [
    {
      Verse1: "../assets/verseAudio.mp3",
      Verse2: "../assets/verseAudio2.mp3",
      Verse3: "../assets/verseAudio3.mp3",
      Verse4: "../assets/verseAudio4.mp3",
      Verse5: "../assets/verseAudio5.mp3",
    },
  ];
  const Tracks = [
    {
      id: 0,
      track: require("../assets/verseAudio.mp3"),
    },
    {
      id: 1,
      track: require("../assets/verseAudio2.mp3"),
    },
    {
      id: 2,
      track: require("../assets/verseAudio3.mp3"),
    },
  ];
  const [CurrentSong, SetCurrentSong] = React.useState(Tracks[0]);

  const changeTime = (seconds) => {
    console.log("---------- seconds : ", seconds);
    console.log("---------- trackLength : ", trackLength);

    var minutes = Math.floor(seconds / 60);
    var secondss = ((seconds % 60) / 1000).toFixed(0);
    var res = minutes.toString() + ":" + secondss.toString();
    setTimeElapsed(res);
    setTimeRemaining(res);

    // setTimeElapsed(Moment.utc(seconds * 1000).format("m:ss"));
    // setTimeRemaining(
    //   Moment.utc((trackLength - seconds) * 1000).format("	HH:mm:ss")
    // );
  };
  const convertMillisToSec = (mil) => {
    var sec = Math.floor((mil / 1000) % 60);
    return sec;
  };
  const changeTimeInitial = (seconds) => {
    console.log("let try that => ", seconds);
    var sec = Math.floor((seconds / 1000) % 60);
    setTimeElapsed("0:00");

    var minutes = Math.floor(seconds / 60000);
    var secondss = ((seconds % 60000) / 1000).toFixed(0);
    var res = minutes.toString() + ":" + secondss.toString();
    console.log('Moment.utc(sec * 1000).format("m:ss")', res);
    setTimeRemaining(res);
  };

  const setTrackLengthFunct = (millis) => {
    var secondss = (result.durationMillis / 1000).toFixed(0);
    console.log("haha our tracklength not 15 : ", secondss);
    setTrackLength((result.durationMillis / 1000).toFixed(0));

    result.durationMillis;
  };

  const onPlaybackStatusUpdate = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          setCurrentTime(convertMillisToSec(result.positionMillis));
          // Update Time Elapsed and Time Remaining
          setTimeRemaining(
            Moment.utc(
              (trackLength - convertMillisToSec(result.positionMillis)) * 1000
            ).format("m:ss")
          );
          setTimeElapsed(
            Moment.utc(convertMillisToSec(result.positionMillis) * 1000).format(
              "m:ss"
            )
          );
        } else {
          console.log(" ghghghghgh is paused");
          return 0;
        }
      }
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  React.useEffect(() => {
    LoadAudio();

    return () => Unload();
  }, [CurrentSong]);

  const Unload = async () => {
    await sound.current.unloadAsync();
  };

  const LoadAudio = async () => {
    SetLoaded(false);
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          {
            uri: "https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Quran Audio%2FPart-5.mp3?alt=media&token=f4dda6d9-af2c-4818-9c82-fea11831ae2a",
          },
          {},
          true
        );

        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          console.log("hahaha", result);
          changeTimeInitial(result.durationMillis);
          console.log("11111 Again", trackLength);
          setTrackLength((result.durationMillis / 1000).toFixed(0));

          console.log("Can you see me", result.durationMillis);
          console.log("22222 Again", trackLength);
          //   setTimeElapsed(result.durationMillis);
          SetLoading(false);
          // PlayAudio();
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };
  const PlayAudio = async () => {
    try {
      console.log("PlayAudio");
      const result = await sound.current.getStatusAsync();
      console.log("result", result);
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  sound.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

  const PauseAudio = async () => {
    console.log("PauseAudio");
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PlayFromThisPosition = async (sec) => {
    if (played) {
      console.log("lets check here ", timeRemaining);
      console.log("22222 Again", trackLength);
      var positionInMillis = sec * 1000;
      console.log("PlayFromThisPosition");
      try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
          if (result.isPlaying === true) {
            sound.current.pauseAsync();
            sound.current.setPositionAsync(positionInMillis);
            setCurrentTime(sec);
            sound.current.playAsync();
            setPlayOrPause(true);
          } else {
            sound.current.setPositionAsync(positionInMillis);
            setCurrentTime(sec);
            sound.current.playAsync();
            setPlayOrPause(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("its the first time ");
      setPlayed(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center", marginTop: 24 }}>
          <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 15, fontWeight: "500", marginTop: 8 },
            ]}
          >
            The Holy Qur'an
          </Text>
        </View>

        <View style={styles.coverContainer}>
          <Image
            source={require("../assets/book.png")}
            style={styles.cover}
          ></Image>
        </View>

        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>
            {partTitle}
          </Text>
          <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>
            Holy Quran
          </Text>
        </View>
      </View>

      <View style={{ margin: 32 }}>
        <Slider
          onValueChange={(seconds) => {
            console.log("hello there ", seconds);
            changeTime(seconds);
            PlayFromThisPosition(seconds);
          }}
          value={currentTime}
          minimumValue={0}
          maximumValue={trackLength}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#93A8B3"
          onSlidingComplete={(value) => setCurrentTime(value.toFixed(0))}
        ></Slider>
        <View
          style={{
            marginTop: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.textLight, styles.timeStamp]}>
            {timeElapsed}
          </Text>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {timeRemaining}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name="backward"
            size={32}
            color="#93A8B3"
          ></FontAwesome5>
        </TouchableOpacity>

        {!playOrPause ? (
          <TouchableOpacity
            style={styles.playButtonContainer}
            onPress={() => {
              setPlayOrPause(!playOrPause);
              PlayAudio();
            }}
          >
            <FontAwesome5
              name="play"
              size={32}
              color="#3D425C"
              style={[styles.playButton, { marginLeft: 8 }]}
            ></FontAwesome5>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.playButtonContainer}
            onPress={() => {
              setPlayOrPause(!playOrPause);
              PauseAudio();
            }}
          >
            <FontAwesome5
              name="pause"
              size={32}
              color="#3D425C"
              style={[styles.playButton, { marginLeft: 8 }]}
            ></FontAwesome5>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PlayerFunct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
  },
  textLight: {
    color: "#B6B7BF",
  },
  text: {
    color: "#8E97A6",
  },
  textDark: {
    color: "#3D425C",
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: "#FFF",
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: "#3D425C",
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: "500",
  },
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5D3F6A",
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});
