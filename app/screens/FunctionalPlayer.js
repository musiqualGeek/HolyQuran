import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const PlayerFunct = ({ navigation, route }) => {
  const sound = React.useRef(new Audio.Sound());
  const { id } = route.params;
  const [trackLength, setTrackLength] = useState(3500);
  const [timeElapsed, setTimeElapsed] = useState("__:__");
  const [timeRemaining, setTimeRemaining] = useState("__:__");
  const [playOrPause, setPlayOrPause] = useState(false);
  const [played, setPlayed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [firstTime, setFirstTime] = useState(false);

  const Tracks = [
    {
      id: 0,
      title: "Part-1",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-1.mp3?alt=media&token=21e6559d-79b8-463a-9984-f58708f2c289",
    },
    {
      id: 1,
      title: "Part-2",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-2.mp3?alt=media&token=de6a2a5d-c92f-4acd-915b-a7e390e8492f",
    },
    {
      id: 2,
      title: "Part-3",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-3.mp3?alt=media&token=b1d3757c-39bd-413c-9102-92b424f30155",
    },
    {
      id: 3,
      title: "Part-4",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-4.mp3?alt=media&token=e0e6d0ba-b75a-45e3-b806-391174e21bed",
    },
    {
      id: 4,
      title: "Part-5",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-5.mp3?alt=media&token=4629b8d5-1f6f-4adc-9d56-99bf9dca3388",
    },
    {
      id: 5,
      title: "Part-6",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-6.mp3?alt=media&token=a920fde3-163a-47f3-956e-5322b4e9f75c",
    },
    {
      id: 6,
      title: "Part-7",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-7.mp3?alt=media&token=b870ace9-585f-4806-a4e6-7855b46dcbe9",
    },
    {
      id: 7,
      title: "Part-8",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-8.mp3?alt=media&token=bd33a097-b0df-463f-8a87-8ce4b9ba1106",
    },

    {
      id: 8,
      title: "Part-9",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-9.mp3?alt=media&token=ec4adbd7-60d3-44d2-aec2-c20ec5e8b552",
    },
    {
      id: 9,
      title: "Part-10",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-10.mp3?alt=media&token=0f0fe5fd-7eda-455a-9440-71f1e1af7f32",
    },
    {
      id: 10,
      title: "Part-11",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-11.mp3?alt=media&token=83105a36-b01c-4715-91d3-7ee866df6e86",
    },
    {
      id: 11,
      title: "Part-12",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-12.mp3?alt=media&token=6cdb7dbd-6869-4a4a-b495-f9e13566d0c2",
    },
    {
      id: 12,
      title: "Part-13",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-13.mp3?alt=media&token=9c8e4a94-bf1e-40c5-8cf7-9b525a9d76ef",
    },

    {
      id: 13,
      title: "Part-14",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-14.mp3?alt=media&token=46b72cae-89fc-4fef-bea1-bec7af6d9058",
    },

    {
      id: 14,
      title: "Part-15",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-15.mp3?alt=media&token=7132fbf7-9e93-4f42-bc18-1e1fd74eb5f2",
    },

    {
      id: 15,
      title: "Part-16",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-16.mp3?alt=media&token=31faf163-34fe-4918-9566-cfd57f948391",
    },

    {
      id: 16,
      title: "Part-17",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-17.mp3?alt=media&token=2d280a97-e48c-45d9-a085-150c14e00c23",
    },

    {
      id: 17,
      title: "Part-18",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-18.mp3?alt=media&token=4b612c07-cb74-44c1-ade5-1581584f44fc",
    },

    {
      id: 18,
      title: "Part-19",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-19.mp3?alt=media&token=ec1e5089-7b04-4dc8-9e51-3632d0aeb5d4",
    },

    {
      id: 19,
      title: "Part-20",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-20.mp3?alt=media&token=06357d79-1614-42fa-8df4-c73bf43ec5bb",
    },

    {
      id: 20,
      title: "Part-21",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-21.mp3?alt=media&token=bf5505b5-5d6f-4479-a60b-249f79e3c886",
    },

    {
      id: 21,
      title: "Part-22",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-22.mp3?alt=media&token=4ff8e480-81ea-45d1-8a51-ac81436cdfaf",
    },

    {
      id: 22,
      title: "Part-23",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-23.mp3?alt=media&token=7408d88c-474b-4cca-95d6-5c4c40336004",
    },

    {
      id: 23,
      title: "Part-24",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-24.mp3?alt=media&token=a1ba12d7-b68e-47b1-9bb9-4f07350b28e7",
    },

    {
      id: 24,
      title: "Part-25",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-25.mp3?alt=media&token=0d5b0f88-5919-4b45-bbf1-2c89b13c4bd7",
    },

    {
      id: 25,
      title: "Part-26",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-26.mp3?alt=media&token=00e89de3-7a15-4ef4-880e-e6a6d61cea37",
    },

    {
      id: 26,
      title: "Part-27",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-27.mp3?alt=media&token=35066504-4ba9-40ce-8da5-3bc62a8d2333",
    },

    {
      id: 27,
      title: "Part-28",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-28.mp3?alt=media&token=c9da6970-ffa7-4736-adfb-be67ef326d40",
    },

    {
      id: 28,
      title: "Part-29",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-29.mp3?alt=media&token=f6ae21d6-0e37-4e1f-a30f-d5b018260934",
    },
    {
      id: 29,
      title: "Part-30",
      track:
        "https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/Audio%2FPart-30.mp3?alt=media&token=311f4b3b-b3c0-4e1d-a01c-673222e998ed",
    },
  ];

  const [CurrentSong, SetCurrentSong] = React.useState(Tracks[id]);

  const NextSong = () => {
    if (CurrentSong.id === Tracks[Tracks.length - 1].id) {
      SetCurrentSong(Tracks[0]);
      setPlayOrPause(false);
    } else {
      SetCurrentSong(Tracks[CurrentSong.id + 1]);
      setPlayOrPause(false);
    }
  };

  const PrevSong = () => {
    if (CurrentSong.id === 0) {
      SetCurrentSong(Tracks[Tracks.length - 1]);
      setPlayOrPause(false);
    } else {
      SetCurrentSong(Tracks[CurrentSong.id - 1]);
      setPlayOrPause(false);
    }
  };

  const changeTime = (seconds) => {
    var minutes = Math.floor(seconds / 60);
    var secondss = ((seconds % 60) / 1000).toFixed(0);
    var res = minutes.toString() + ":" + secondss.toString();
    setTimeElapsed(res);
    setTimeRemaining(res);
  };

  const convertMillisToSec = (mil) => {
    var sec = Math.floor(mil / 1000);
    return sec;
  };

  const changeTimeInitial = (seconds) => {
    var sec = Math.floor((seconds / 1000) % 60);
    setTimeElapsed("0:00");
    var minutes = Math.floor(seconds / 60000);
    var secondss = ((seconds % 60000) / 1000).toFixed(0);
    var res = minutes.toString() + ":" + secondss.toString();
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
          // currentTimee.setValue(convertMillisToSec(result.positionMillis));
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
            uri: CurrentSong.track,
          }
        );

        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          console.log("hahaha", result);
          setTrackLength((result.durationMillis / 1000).toFixed(0));
          changeTimeInitial(result.durationMillis);
          console.log("11111 Again", trackLength);

          console.log("Can you see me", result.durationMillis);
          console.log("22222 Again", trackLength);
          //   setTimeElapsed(result.durationMillis);
          SetLoading(false);
          // PlayAudio();
          SetLoaded(true);
          setFirstTime(true);
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

  if (firstTime) {
    console.log("now yes");
    sound.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  }

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
            console.log("PlayFromThisPosition try here line 231");
            sound.current.pauseAsync();
            sound.current.setPositionAsync(positionInMillis);
            setCurrentTime(sec);
            sound.current.playAsync();
            setPlayOrPause(true);
          } else {
            console.log("PlayFromThisPosition try here line 238");
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
    <View style={styles.main}>
      <View style={styles.headerBack}>
        <BackRoute navigation={navigation} color="#496F51" />
      </View>
      <View style={styles.topContainer}>
        <CustomText text="PLAYLIST" style={styles.title1} type="1" />
        <CustomText text="The Holy Qur'an" style={styles.title2} type="1" />
        <Image source={require("../assets/book.png")} style={styles.cover} />
        <CustomText
          text={CurrentSong.title ? CurrentSong.title : "title"}
          style={styles.title2}
          type="1"
        />
      </View>
      <View style={styles.bottomContainer}>
        {/* Slider */}
        <View style={styles.sliderContainer}>
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
          />
          <View style={styles.timerSlider}>
            <Text style={styles.timeStamp}>{timeElapsed}</Text>
            <Text style={styles.timeStamp}>{timeRemaining}</Text>
          </View>
        </View>
        {/* Audio Control */}
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={PrevSong}>
            <FontAwesome5 name="backward" size={32} color="#93A8B3" />
          </TouchableOpacity>
          {!playOrPause ? (
            <TouchableOpacity
              style={styles.playButtonContainer}
              onPress={() => {
                setPlayOrPause(true);
                PlayAudio();
              }}
            >
              <FontAwesome5
                name="play"
                size={32}
                color="#3D425C"
                style={[styles.playButton, { marginLeft: 2 }]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.playButtonContainer}
              onPress={() => {
                setPlayOrPause(false);
                PauseAudio();
              }}
            >
              <FontAwesome5
                name="pause"
                size={32}
                color="#3D425C"
                style={[styles.playButton, { marginLeft: 2 }]}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={NextSong}>
            <FontAwesome5 name="forward" size={32} color="#93A8B3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PlayerFunct;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  coverContainer: {
    width: "100%",
  },
  cover: {
    width: 250,
    height: 150,
    alignSelf: "center",
  },
  headerBack: {
    width: "100%",
    marginTop: 20,
  },
  title1: {
    color: "#B6B7BF",
    fontSize: 14,
    marginTop: 50,
    marginBottom: 10,
  },
  title2: {
    color: "#B6B7BF",
    fontSize: 18,
  },
  sliderContainer: {
    alignSelf: "center",
    width: "80%",
    marginTop: 10,
  },
  timerSlider: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  timeStamp: {
    fontSize: 12,
    fontWeight: "500",
  },
  audioControl: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  topContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
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
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
});
