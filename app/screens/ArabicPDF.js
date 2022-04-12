import React from "react";
import { StyleSheet, Text, View , Dimensions} from 'react-native'
import PDFReader  from "rn-pdf-reader-js";

const ArabicPDF = ({ route }) => {
  return (
      <PDFReader
        source={{
          uri: route.params.uri,
        }}/>
    // <View style={{backgroundColor:'red',flex:1}}>
    //   <Text>ArabicPDF</Text>
    // </View>
  )
}

export default ArabicPDF; 

const styles = StyleSheet.create({})