import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import MyHeader from "../components/MyHeader";

export default function ScreenA({ navigation }) {
  // const onPressHandler = () => {
  //   navigation.navigate("Screen_B");
  //   // navigation.replace("Screen_B");
  // };
  return (
    <View style={styles.body}>
      <MyHeader menu/>
      {/* <Text style={styles.text}>Home</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text style={styles.text}>Go to the Screen B</Text>
      </Pressable> */}
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
});
