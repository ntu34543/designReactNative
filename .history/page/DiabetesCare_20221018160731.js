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
        <View style={styles.text}>
          <Text>sdsdsd</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  banner: {
  },
  img: {
    position: "absolute",
  },
  text: {
    position: "absolute",
  },
});
