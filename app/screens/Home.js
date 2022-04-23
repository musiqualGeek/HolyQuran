import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import quoran from "../assets/quoran.json";
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "@expo-google-fonts/quicksand";

const data = [
  { id: "1", title: "1. Al-Fa\u0304tiḥah: THE OPENING" },
  { id: "2", title: "2. Al-Baqarah: THE COW" },
  { id: "3", title: "3. A\u0304l ‘Imra\u0304n : THE FAMILY OF AMRAN" },
  { id: "4", title: "4. Al-Nisa\u0304 : THE WOMEN" },
  { id: "5", title: "5. Al-Ma\u0304’idah : THE FOOD" },
  { id: "6", title: "6. Al-An‘a\u0304m : THE CATTLE" },
  { id: "7", title: "7. Al-A‘ra\u0304f : THE ELEVATED PLACES" },
  { id: "8", title: "8. Al-Anfa\u0304l : VOLUNTARY GIFTS" },
  { id: "9", title: "9. Al-Bara\u0304’at : THE IMMUNITY" },
  { id: "10", title: "10. Yu\u0304nus : JONAH" },
  { id: "11", title: "11. Hu\u0304d" },
  { id: "12", title: "12. Yu\u0304suf : JOSEPH" },
  { id: "13", title: "13. Al-Ra‘d : THE THUNDER" },
  { id: "14", title: "14. Ibra\u0304him : ABRAHAM" },
  { id: "15", title: "15. Al-Ḥijr : THE ROCK" },
  { id: "16", title: "16. Al-Naḥl : THE BEE" },
  { id: "17", title: "17. Bani Isra\u0304’il : THE ISRAELITES" },
  { id: "18", title: "18. Al-Kahf: THE CAVE" },
  { id: "19", title: "19. Maryam: MARY" },
  { id: "20", title: "20. Ṭa\u0304 Ha\u0304" },
  { id: "21", title: "21. Al-Anbiya\u0304’ : THE PROPHETS" },
  { id: "22", title: "22. Al-Ḥajj : THE PILGRIMAGE" },
  { id: "23", title: "23. Al-Mu’minu\u0304n : THE BELIEVERS" },
  { id: "24", title: "24. Al-Nu\u0304r : THE LIGHT" },
  { id: "25", title: "25. Al-Furqa\u0304n : THE DISCRIMINATION" },
  { id: "26", title: "26. Al-Shu‘ara\u0304 : THE POETS" },
  { id: "27", title: "27. Al-Naml: THE NAML" },
  { id: "28", title: "28. Al-Qaṣaṣ : THE NARRATIVE" },
  { id: "29", title: "29. Al- ‘Ankabu\u0304t : THE SPIDER" },
  { id: "30", title: "30. Al-Ru\u0304m : THE ROMANS" },
  { id: "31", title: "31. Luqma\u0304n" },
  { id: "32", title: "32. Al-Sajdah: THE ADORATION" },
  { id: "33", title: "33. Al-Aḥza\u0304b : THE ALLIES" },
  { id: "34", title: "34. Al-Saba’: THE SABA’" },
  { id: "35", title: "35. Al-Fa\u0304ṭir : THE ORIGINATOR" },
  { id: "36", title: "36. Ya\u0304 Sin" },
  { id: "37", title: "37. Al-Ṣa\u0304ffa\u0304t : THOSE RANGING IN RANKS" },
  { id: "38", title: "38. Ṣa\u0304d" },
  { id: "39", title: "39. Al-Zumar: THE COMPANIES" },
  { id: "40", title: "40. Al-Mu’min : THE BELIEVER" },
  { id: "41", title: "41. Ḥa\u0304 Mim" },
  { id: "42", title: "42. Al-S\u0331h\u0331u\u0304ra\u0304 : THE COUNSEL" },
  { id: "43", title: "43. Zuk\u0331h\u0331ruf : GOLD" },
  { id: "44", title: "44. Al-Duk\u0331h\u0331a\u0304n : THE DROUGHT" },
  { id: "45", title: "45. Al-Ja\u0304t\u0331h\u0331iyah : THE KNEELING" },
  { id: "46", title: "46. Al-Aḥqa\u0304f : THE SANDHILLS" },
  { id: "47", title: "47. Muḥammad" },
  { id: "48", title: "48. Al-Fatḥ : THE VICTORY" },
  { id: "49", title: "49. Al-Ḥujura\u0304t : THE APARTMENTS" },
  { id: "50", title: "50. Qa\u0304f" },
  { id: "51", title: "51. Al-D\u0331h\u0331a\u0304riya\u0304t : THE SCATTERERS" },
  { id: "52", title: "52. Al-Ṭu\u0304r : THE MOUNTAIN" },
  { id: "53", title: "53. An-Najm: THE STAR" },
  { id: "54", title: "54. Al-Qamar: THE MOON" },
  { id: "55", title: "55. Al-Raḥma\u0304n : THE BENEFICENT" },
  { id: "56", title: "56. Al-Wa\u0304qi‘ah : THE EVENT" },
  { id: "57", title: "57. Al-Ḥadid : IRON" },
  { id: "58", title: "58. Al-Muja\u0304dilah : THE PLEADING WOMAN" },
  { id: "59", title: "59. Al-Ḥas\u0331h\u0331r : THE BANISHMENT" },
  { id: "60", title: "60. Al-Mumtaḥanah : THE WOMAN WHO IS EXAMINED" },
  { id: "61", title: "61. Al-Ṣaff : THE RANKS" },
  { id: "62", title: "62. Al-Jumu'ah: THE CONGREGATION" },
  { id: "63", title: "63. Al-Muna\u0304fiqu\u0304n : THE HYPOCRITES" },
  { id: "64", title: "64. Al-Tag\u0331h\u0331a\u0304bun : THE MANIFESTATION OF LOSSES" },
  { id: "65", title: "65. Al-Ṭala\u0304q : THE DIVORCE" },
  { id: "66", title: "66. Al-Taḥrim : THE PROHIBITION" },
  { id: "67", title: "67. Al-Mulk: THE KINGDOM" },
  { id: "68", title: "68. Al-Qalam: THE PEN" },
  { id: "69", title: "69. Al-Ḥa\u0304qqah : THE SURE TRUTH" },
  { id: "70", title: "70. Al-Ma‘a\u0304rij : THE WAYS OF ASCENT" },
  { id: "71", title: "71. Nu\u0304ḥ : NOAH" },
  { id: "72", title: "72. Al-Jinn: THE JINN" },
  { id: "73", title: "73. Al-Muzzammil: THE ONE COVERING HIMSELF UP" },
  { id: "74", title: "74. Al-Muddat\u0331h\u0331t\u0331h\u0331ir : THE ONE WRAPPING HIMSELF UP" },
  { id: "75", title: "75. Al-Qiya\u0304mah : THE RESURRECTION" },
  { id: "76", title: "76. Al-Insa\u0304n : THE MAN" },
  { id: "77", title: "77. Al-Mursala\u0304t : THOSE SENT FORTH" },
  { id: "78", title: "78. Al-Naba': THE ANNOUNCEMENT" },
  { id: "79", title: "79. Al-Na\u0304zi‘a\u0304t :THOSE WHO YEARN" },
  { id: "80", title: "80. 'Abasa: HE FROWNED" },
  { id: "81", title: "81. At-Takweer: THE FOLDING UP" },
  { id: "82", title: "82. Al-Infiṭa\u0304r : THE CLEAVING" },
  { id: "83", title: "83. Al-Taṭfif : DEFAULT IN DUTY" },
  { id: "84", title: "84. Al-Ins\u0331h\u0331iqa\u0304q : THE BURSTING ASUNDER" },
  { id: "85", title: "85. Al-Buru\u0304j : THE STARS" },
  { id: "86", title: "86. Al-Ṭa\u0304riq : THE COMER BY NIGHT" },
  { id: "87", title: "87. Al-A‘l¯a : THE MOST HIGH" },
  { id: "88", title: "88. Al-G\u0331h\u0331a\u0304s\u0331h\u0331iyah : THE OVERWHELMING EVENT" },
  { id: "89", title: "89. Al-Fajr: THE DAYBREAK" },
  { id: "90", title: "90. Al-Balad:  THE CITY" },
  { id: "91", title: "91. Al-S\u0331h\u0331ams : THE SUN" },
  { id: "92", title: "92. Al-Lail: THE NIGHT" },
  { id: "93", title: "93. Al-Duḥa : THE BRIGHTNESS OF THE DAY" },
  { id: "94", title: "94. Al-Ins\u0331h\u0331ira\u0304ḥ: THE EXPANSION" },
  { id: "95", title: "95. At-Tin: THE FIG" },
  { id: "96", title: "96. Al-‘Alaq : THE CLOT" },
  { id: "97", title: "97. Al-Qadr: THE MAJESTY" },
  { id: "98", title: "98. Al-Bayyinah: THE CLEAR EVIDENCE" },
  { id: "99", title: "99. Al-Zilza\u0304l : THE SHAKING" },
  { id: "100", title: "100. Al-‘A\u0304diya\u0304t : THE ASSAULTERS" },
  { id: "101", title: "101. Al-Qa\u0304ri‘ah : THE CALAMITY" },
  { id: "102", title: "102. Al-Taka\u0304t\u0331h\u0331ur : : THE ABUNDANCE OF WEALTH" },
  { id: "103", title: "103. Al-‘Aṣr : THE TIME" },
  { id: "104", title: "104. Al-Humazah: THE SLANDERER" },
  { id: "105", title: "105. Al-Fil: THE ELEPHANT" },
  { id: "106", title: "106. Al-Qurais\u0331h\u0331 : THE QURAISH" },
  { id: "107", title: "107. Al-Ma\u0304‘u\u0304n : ACTS OF KINDNESS" },
  { id: "108", title: "108. Al-Kaut\u0331h\u0331ar : THE ABUNDANCE OF GOOD" },
  { id: "109", title: "109. Al-Ka\u0304firu\u0304n : THE DISBELIEVERS" },
  { id: "110", title: "110. Al-Naṣr : THE HELP" },
  { id: "111", title: "111. Al-Lahab: THE FLAME" },
  { id: "112", title: "112. Al-Ik\u0331h\u0331la\u0304s : THE UNITY" },
  { id: "113", title: "113. Al-Falaq: THE DAWN" },
  { id: "114", title: "114. Al-Na\u0304s : THE MEN" },
];

const dataTable = quoran;

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_1: require("../assets/fonts/Quicksand_Bold.ttf"),
    Quicksand_2: require("../assets/fonts/Quicksand_Regular.ttf"),
    Quicksand_3: require("../assets/fonts/Quicksand_Light.ttf"),
  });
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      let after = data.filter(checkWord);
      let array2 = [];
      console.log("after => ", after);
      if (after.length > 0) {
        for (let i = 0; i < 10; i++) {
          if (after[i]) {
            array2.push(after[i]);
          }
        }
        setSearchArray(array2);
      } else {
        setSearchArray([]);
      }
    }
    if (search.length === 0) {
      setSearchArray([]);
    }
  }, [search]);

  const checkWord = (item) => {
    let ch = item.title.substr(0, search.length).toUpperCase();
    let ch2 = search.toUpperCase();
    if (ch == ch2) return true;
    return false;
  };
  const handleVerse = (id) => {
    console.log("Id from handleVerse", id);
    let verseId = parseInt(id);
    navigation.navigate("Verses", { verse: dataTable[verseId - 1] });
  };
  if (!fontsLoaded) {
    return <Text>Alex waiting</Text>;
  } else {
    return (
      <View style={styles.mainContainer}>
        {/* <ImageBackground
          style={styles.image}
          source={require("../assets/border_new.png")}
        /> */}
        <View style={styles.borderContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Language")}>
            <Ionicons
              name="arrow-back"
              color="gray"
              size={24}
              style={{ margin: 20 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 24,
              fontFamily: "Quicksand_1",
              color: "#264A27",
              marginTop: -50,
            }}
          >
            QURAN CHAPTERS
          </Text>
          <View style={styles.container}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
              borderColor="#36bf49"
            />
            {searchArray.length > 0 ? (
              <FlatList
                data={searchArray}
                keyExtractor={(item) => "" + item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleVerse(item.id)}
                    style={styles.listItem}
                  >
                    <Text style={styles.listItemText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item) => "" + item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleVerse(item.id)}
                    style={styles.listItem}
                  >
                    <Text style={styles.listItemText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
            {/* <Image
              style={styles.image}
              source={require("../assets/mosque.png")}
            /> */}
            <StatusBar style="auto" />
          </View>
          {/* <ImageBackground
          style={[styles.fixed, styles.bgcontainter, { zIndex: -1 }]}
          source={require("../assets/mosque.png")}
        /> */}
        </View>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? 48 : 44,
  },
  borderContainer: {
    flex: 1,
    borderWidth: 0.1,
    borderColor: "#496F51",
    paddingBottom: 16,
  },
  container: {
    marginTop: 16,
    flex: 1,
    backgroundColor: "#fff",
    marginStart: 20,
    marginEnd: 20,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#496F51",
    width: "100%",
  },
  listItemText: {
    fontSize: 16,
    fontFamily: "Quicksand_1",
    color: "white"
  },
});
