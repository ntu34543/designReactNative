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
} from "react-native";

export default function ScreenB({ navigation }) {
  const [p]
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <View style={styles.banner}>
        <View style={styles.imgHeader}>
          <Image
            style={styles.image}
            source={require("../assets/img/banner.png")}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.title1}>Save extra on every order</Text>
          <Text style={styles.title2}>
            Etiam mollis metus non faucibus sollicitudin.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.topPro}>
        <Text style={styles.title3}>Diabetic Diet</Text>
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.content}
          horizontal={true}
          renderItem={({ item }) => (
              <Text>sdfsfsdf</Text>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    flex: 1,
  },
  imgHeader: {
    position: "absolute",
  },
  title: {
    position: "absolute",
    paddingRight: 120,
  },
  title1: {
    color: "#1987FB",
    fontSize: 18,
    width: 110,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 12,
    width: 170,
    fontWeight: "light",
    color: "#b0c4d4",
  },
  image: {
    borderRadius: 15,
  },
  topPro: {
    flex: 3,
  },
  title3: {
    position: "relative",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
