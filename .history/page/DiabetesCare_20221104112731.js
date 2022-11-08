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
import Banner from "../components/Banner";
import TopProduct from "../components/TopProduct";
import Product from "../components/Product";

export default function DiabetesCare({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    // navigation.goBack();
  };
  const Detail = () => {
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>;
  };
  return (
    <View style={styles.body}>
      <Banner />
      <TopProduct />
      <Product />
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
