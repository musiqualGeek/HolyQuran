import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Part from "../components/Part";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";

const Arabic = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <ScrollView
        style={styles.borderContainer}
        showsVerticalScrollIndicator={false}
      >
        <BackRoute navigation={navigation} color="" />
        <CustomText
          text={`Arabic Translation${"\n"}Of Quran`}
          style={styles.title}
          type="1"
        />
        <View style={styles.block_1}>
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/pdf%2FPart%20(1-9).pdf?alt=media&token=6c57c4d9-5e1b-49c2-b0cd-ea2c21024c31"
            name={`AUDIO PART${"\n"}(1-9)`}
            navigation={navigation}
          />
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/pdf%2FPart%20(9-16).pdf?alt=media&token=29e90e6b-c393-4e92-a746-3ca865f99d9d"
            name={`AUDIO PART${"\n"}(9-16)`}
            navigation={navigation}
          />
        </View>
        <View style={styles.block_2}>
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/pdf%2FPart%20(16-22).pdf?alt=media&token=7bd08cc0-9059-4070-8953-7a01ac919021"
            name={`AUDIO PART${"\n"}(16-22)`}
            navigation={navigation}
          />
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/pdf%2FPart%20(22-27).pdf?alt=media&token=f12de3db-f269-4027-9a89-4dab9636c9cd"
            name={`AUDIO PART${"\n"}(22-27)`}
            navigation={navigation}
          />
        </View>
        <Part
          url="https://firebasestorage.googleapis.com/v0/b/holyquran-b3ee0.appspot.com/o/pdf%2FPart%20(27-30).pdf?alt=media&token=07d7c934-b8df-468c-be3d-993e0ee85094"
          name={`AUDIO PART${"\n"}(27-30)`}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Arabic;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  borderContainer: {
    flex: 1,
    marginVertical: 10,
    marginTop: 28,
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    color: "#264A27",
    textAlign: "center",
    marginBottom: 20,
  },
  block_1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  block_2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
