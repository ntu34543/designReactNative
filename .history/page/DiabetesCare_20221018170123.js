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
          <Text style={styles.title1}>Save extra on every order</Text>
          <Text style={styles.title2}>
            Etiam mollis metus non faucibus sollicitudin.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.topPro}>
        <Text style={styles.title3}>Diabetic Diet</Text>
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
  topPro: {
    flex: 3,
  },
  title3: {
    position: "relative",
  },
});
