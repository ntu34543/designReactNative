import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function ScreenB({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <View style={styles.banner}>
        <View style={styles.img}>
          <Image
            // style={styles.image}
            source={require("../assets/img/banner.png")}
          />
        </View>
        <View style={styles.title}>
          <Text>sdsdsd</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    borderRadius: 50,
  },
  img: {
    position: "absolute",
  },
  title: {
    position: "absolute",
  },
});
