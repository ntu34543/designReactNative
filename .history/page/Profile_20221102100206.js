import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Profile({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../assets/img/profile.png")}
        />
        <View style={styles.inf}>
          <Text style={styles.text1}>Hi, Ben Cline</Text>
          <Text style={styles.text2}>Welcome to Medtech</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.block}>
          <FontAwesome5 name="home" size={17} color="red" />
          <View style={styles.item}>
            <Text>Private Account</Text>
            <FontAwesome5 name="chevron-right" size={15} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  inf: {
    marginLeft: 15,
  },
  image: {},
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    fontWeight: "light",
    fontSize: 14,
    color: "#b9bfc8",
  },
});
