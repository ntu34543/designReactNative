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

export default function ScreenB({ navigation }) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Sugar Substitute",
      img: require("../assets/img/SugarSubstitute.png"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Juices & Vinegars",
      img: require("../assets/img/SugarSubstitute.png"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Vitamins Medicines",
      img: require("../assets/img/SugarSubstitute.png"),
    },
  ];

  const Item = ({ name, img }) => (
    <View style={styles.item}>
      <Image style={styles.imgTopProduct} source={img} />
      <View>
        <Text style={styles.nameTopProduct}>{name}</Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item.name} img={item.img} />;

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
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </SafeAreaView>
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
  item: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  imgTopProduct: {
    borderT: 10,
  }
});
