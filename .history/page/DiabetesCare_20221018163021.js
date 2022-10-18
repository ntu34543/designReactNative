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
        <View style={styles.imgHeader}>
          <Image
            style={styles.image}
            source={require("../assets/img/banner.png")}
          />
        </View>
        <View style={styles.title}>
          <Text>Save extra on every order</Text>
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
  },
  imgHeader: {
    position: "absolute",
  },
  title: {
    position: "absolute",
  },
  image: {
    borderRadius: 10,
  },
});
