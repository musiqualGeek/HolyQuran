import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { auth } from "../../firebase/utils";
import CustomText from "../components/CustomText";
import BackRoute from "../components/BackRoute";
import { useSelector } from "react-redux";
import quoran from "../assets/quoran.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux'
import { signOutUser } from "../redux/User/user.actions";

const mapState = ({ user }) => ({
  userD: user.userD,
});

var DATA = []
const Profile = ({ navigation }) => {
  const { userD } = useSelector(mapState);
  const [bookmark, setBookmark] = useState([])
  const dispatch = useDispatch()

  const Item = ({ id, title }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Verses", {
            verse: quoran[id - 1],
            ourId: id,
          });
        }}
      >
        <View style={styles.item}>
          <CustomText text={title} style={{ color: "white", }} type="1" />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;

  const existInTab = (tab, a) => {
    let i = 0;
    while (i < tab.length) {
      if (tab[i].id === a) return true;
      i++;
    }
    return false;
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@holy_quran_Key");
      let arr = JSON.parse(value);
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          let obj = {
            id: arr[i],
            title: quoran[arr[i] - 1].chapter,
          };
          if (!existInTab(DATA, arr[i])) DATA.push(obj);
        }
        setBookmark(DATA)
      }
    } catch (e) {
      console.error("error bookmark => ", e)
    }
  };

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  useEffect(() => {
    getData()
    console.log('userD => ', userD)
    console.log('bookmark => ', bookmark)
  }, [bookmark])

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.border}
        source={require("../assets/border_1.png")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 50
        }}
      >
        <View style={styles.borderContainer}>
          <BackRoute navigation={navigation} color="" />
          <View style={styles.header}>
            {/* Profile */}
            <CustomText text="Profile" style={styles.title1} type="1" />
            <CustomText text="Name" style={styles.title2} type="1" />
            <View style={styles.nameContainer}>
              <CustomText
                text={
                  userD?.fullname
                    ? userD?.fullname
                    : "..."
                }
                style={styles.title3}
                type="1"
              />
            </View>
            <CustomText text="E-mail" style={styles.title2} type="1" />
            <View style={styles.nameContainer}>
              <CustomText
                text={userD?.email ? userD?.email : "..."}
                style={styles.title3}
                type="1"
              />
            </View>
            {/* Bookmark */}
            <CustomText text="Bookmarks" style={styles.title1} type="1" />
            {bookmark.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={bookmark}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                marginBottom={20}
              />
            ) : (
              <View style={styles.nobookmarkContainer}>
                <CustomText
                  text="No Bookmarks yet"
                  style={styles.nobookmark}
                  type="1"
                />
              </View>
            )}
            {/* Annotations */}
            <CustomText text="Annotations" style={styles.title1} type="1" />
            <View style={styles.nameContainer}>
              <CustomText
                text="Coming soon..."
                style={styles.title3}
                type="1"
              />
            </View>
            {/* Services */}
            <CustomText text="Services" style={styles.title1} type="1" />
            <TouchableOpacity style={styles.nameContainer} onPress={handleLogout}>
              <CustomText
                text="Logout"
                style={styles.title3}
                type="1"
              />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>


  );
};

export default Profile;

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
  title1: {
    alignSelf: "center",
    fontSize: 24,
    color: "#264A27",
    marginVertical: 10,
  },
  title2: {
    fontSize: 18,
    color: "#264A27",
    marginTop: 20,
    marginLeft: 50,
  },
  title3: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  // Sorted
  emailContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  nameContainer: {
    width: "80%",
    backgroundColor: "#496F51",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  // Bookmark
  listItem: {
    flex: 0.05,
    alignSelf: "center",
    marginTop: 36,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#496F51",
    width: "80%",
    marginStart: 36,
    marginEnd: 36,
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  listItemText: {
    fontSize: 16,
    fontFamily: "Quicksand_1",
    color: "white",
    alignSelf: "center",
    marginTop: 2,
  },
  item: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#496F51",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 5,
  },
  nobookmarkContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  nobookmark: {
    textAlign: "center",
    fontSize: 16,
    color: "#222",
    marginBottom: 20,
  },
  header: {
    paddingHorizontal: "10%",
  }
});
