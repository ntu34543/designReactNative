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

export default function Profile({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
        
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
