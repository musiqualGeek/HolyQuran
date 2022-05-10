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
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(1-9).pdf?alt=media&token=cf905b4d-cb11-4f61-82f9-9e7d9040d2ca"
            name={`AUDIO PART${"\n"}(1-9)`}
            navigation={navigation}
          />
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(9-16).pdf?alt=media&token=11952e9b-d000-4e62-963e-18295589ed8c"
            name={`AUDIO PART${"\n"}(9-16)`}
            navigation={navigation}
          />
        </View>
        <View style={styles.block_2}>
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(16-22).pdf?alt=media&token=a9ee6419-fafc-423f-8e33-b644296d3fde"
            name={`AUDIO PART${"\n"}(16-22)`}
            navigation={navigation}
          />
          <Part
            url="https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(22-27).pdf?alt=media&token=899834af-baab-4ba2-8e04-4f9aaba79809"
            name={`AUDIO PART${"\n"}(22-27)`}
            navigation={navigation}
          />
        </View>
        <Part
          url="https://firebasestorage.googleapis.com/v0/b/holyquran-f922b.appspot.com/o/Part%20(27-30).pdf?alt=media&token=8b3b9a7f-1904-4fe9-94d6-96c75c618cb9"
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
