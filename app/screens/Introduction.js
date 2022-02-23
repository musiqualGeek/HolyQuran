import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Introduction = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.borderContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Language")}>
          <Text
            style={{
              color: "#fff",
              textAlign: "right",
              marginEnd: 16,
              marginTop: 16,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <Text style={styles.textHolyQuran}>The Holy Qur'an</Text>
        <Text style={styles.textEnglish}>
          English Translation{"\n"}and Commentary
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#DAB53F",
            marginTop: 24,
          }}
        >
          by
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "#DAB53F",
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Maulana Muhammad Ali
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#fff",
            marginTop: 5,
          }}
        >
          Renowned author of{"\n"}several classic works on Islam
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#DAB53F",
            marginTop: 48,
            fontWeight: "bold",
          }}
        >
          WITH EXPANDED INDEX
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#fff",
            marginTop: 36,
          }}
        >
          © 2011, Ahmadiyya Anjuman Isha'at Islam{"\n"}Lahore Inc., USA
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "#fff",
            position: "absolute",
            bottom: 0,
            marginBottom: 150,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          P.O. Box 3370 Dublin, Ohio 43016, U.S.A.{"\n"}Ph:614-873-1030;
          fax:614-873-1022; e-mail:{"\n"}aaiil@aol.com{"\n"}Internet:
          www.muslim.org
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#fff",
            position: "absolute",
            bottom: 0,
            marginBottom: 60,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          Published in eBook format by Ahmadiyya{"\n"}Anjuman Ishaat Islam
          Lahore USA{"\n"}Converted by eBookIt.com
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#DAB53F",
            // marginTop: 24,
            position: "absolute",
            bottom: 0,
            marginBottom: 16,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          ISBN-13: 978-1-9342-7114-8
        </Text>
      </View>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#DAB53F",
    marginTop: Platform.OS === "android" ? 48 : 44,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#2D5C2E",
  },
  textEnglish: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
    color: "#fff",
  },
  textHolyQuran: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#DAB53F",
  },
});
