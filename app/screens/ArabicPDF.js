import React from "react";
import PDFReader from "rn-pdf-reader-js";

const ArabicPDF = ({ route }) => {
  const { uri } = route.params;
  return (
    <PDFReader
      source={{
        uri: uri,
      }}
    />
  );
};

export default ArabicPDF;
