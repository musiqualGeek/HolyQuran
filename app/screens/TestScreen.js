import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";

export default function TestScreen() {
  return (
    <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/border_680.png")}
        />   
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      width: Dimensions.get('window').width, //for full screen
      height: Dimensions.get('window').height, //for full screen
        marginTop: Platform.OS === "android" ? 48 : 44,
        // marginBottom: Platform.OS === "android" ? 48 : 44,
        // position: "absolute",
      },
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
         width: "100%",
        height: "50%",
      },
})