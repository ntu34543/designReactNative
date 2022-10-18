import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import B

export default function ScreenB({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <banner />
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
  }
});
