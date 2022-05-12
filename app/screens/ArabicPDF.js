import React from "react";
import PDFReader from "rn-pdf-reader-js";
import { View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ArabicPDF = ({ route, navigation }) => {
  const { uri } = route.params;
  return (
    <View style={{ flex: 1, }} >
      <TouchableOpacity style={{ position: "absolute", bottom: 20, left: 20, width: 50, height: 50, borderRadius: 15, backgroundColor: "#496F51", zIndex: 100, }} onPress={() => navigation.goBack()} >
        <AntDesign name="left" size={28} color="white" style={{ marginLeft: 10, marginTop: 10, }} />
      </TouchableOpacity>
      <PDFReader
        source={{
          uri: uri,
        }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
        withPinchZoom
        />
      </View>
  );
};

export default ArabicPDF;
