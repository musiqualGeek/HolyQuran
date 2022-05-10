import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import CustomText from "../components/CustomText";

const Introduction = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
        resizeMode="cover"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.borderContainer}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Language")}>
          <CustomText text="Next" style={styles.nextText} type="1" />
        </TouchableOpacity>
        <CustomText text="The Holy Qur'an" style={styles.title1} type="1" />
        <CustomText
          text={`English Translation and Commentary${"\n"}by${"\n"}Maulana Muhammad Ali`}
          style={styles.title3}
          type="1"
        />
        <CustomText
          text={`Renowned author of${"\n"}several classic works on Islam${"\n"}WITH EXPANDED INDEX${"\n"}© 2011, Ahmadiyya Anjuman Isha'at Islam${"\n"}Lahore (USA) Inc.${"\n"}P.O. Box 3370 Dublin, Ohio 43016, U.S.A.${"\n"}${"\n"}Ph: 614-873-1030${"\n"}Ph:614-266-1030${"\n"}e-mail: aaiil@aol.com${"\n"}Internet:www.muslim.org${"\n"}Also available in eBook, print and${"\n"}audio formats${"\n"}${"\n"}ISBN-13: 978-1-9342-7114-8`}
          style={styles.title4}
          type="1"
        />
      </ScrollView>
    </View>
  );
};

export default Introduction;

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
    paddingHorizontal: 20,
  },
  nextText: {
    color: "black",
    textAlign: "right",
    marginTop: 50,
    marginRight: 50,
    marginBottom: 20,
    fontSize: 18,
  },
  title1: {
    textAlign: "center",
    fontSize: 28,
    color: "black",
    marginVertical: 10,
  },
  title2: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    marginVertical: 10,
  },
  title3: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    marginVertical: 10,
  },
  title4: {
    textAlign: "center",
    fontSize: 14,
    color: "black",
    marginVertical: 10,
    lineHeight: 28,
  },
});
