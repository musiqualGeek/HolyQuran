import React, { useState } from 'react'
import { Text } from 'react-native'
import * as Font from 'expo-font'
import Apploading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });

const CustomText1 = props => {
    const { text, type } = props
    const [fontsloaded, setFontsLoaded] = useState(false);
    if (fontsloaded) {
        return <Text style={{fontFamily: type === "1" && "Quicksand_1" || type == "2" && "Quicksand_2" || type === "3" && "Quicksand_3"}} >{text}</Text>
    } else {
        return (
        <Apploading
            startAsync={getFonts}
            onFinish={() => {
            setFontsLoaded(true);
            }}
            onError={console.warn}
        />
        );
    }
    }

export default CustomText1;
