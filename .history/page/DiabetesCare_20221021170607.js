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
      price: 112,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Juices & Vinegars",
      img: require("../assets/img/SugarSubstitute.png"),
      price: 150,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Vitamins Medicines",
      img: require("../assets/img/VitaminsMedicines.png"),
      price: 112,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
      name: "Sugar Substitute",
      img: require("../assets/img/SugarSubstitute.png"),
      price: 150,
    },
  ];

  const AllProducts = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Accu-check Active Test Strip",
      img: require("../assets/img/AccucheckActiveTestStrip.png"),
      price: 112,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Omron HEM-8712 BP Monitor",
      img: require("../assets/img/AccucheckActiveTestStrip.png"),
      price: 150,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Accu-check Active Test Strip",
      img: require("../assets/img/AccucheckActiveTestStrip.png"),
      price: 112,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
      name: "Omron HEM-8712 BP Monitor",
      img: require("../assets/img/AccucheckActiveTestStrip.png"),
      price: 150,
    },
  ];
  // topProduct
  const Item = ({ name, img }) => (
    <View style={styles.item}>
      <Image style={styles.imgTopProduct} source={img} />
      <Text style={styles.nameTopProduct}>{name}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item.name} img={item.img} />;
  // all Products
  const AllProduct = ({ name, img, price }) => (
    <View style={styles.itemAllProduct}>
      <Image style={styles.imgTopProduct} source={img} />
      <Text style={styles.allNameTopProduct}>{name}</Text>
      <Text style={styles.allPriceTopProduct}>{price}</Text>
    </View>
  );
  const renderallProduct = ({ item }) => <AllProduct name={item.name} img={item.img} price={item.price} />;

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
      <View style={styles.product}>
        <Text style={styles.title3}>All Products</Text>
        <SafeAreaView>
          <FlatList
            numColumns={2}
            data={AllProducts}
            renderItem={renderallProduct}
            keyExtractor={(item) => item.id}
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
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
    flex: 2,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameTopProduct: {
    width: 100,
    textAlign: "center",
    padding: 10,
  },
  product: {
    flex: 3,
  },
  itemAllProduct: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#f2f4f6',
    borderRadius: 15,
  },
  allNameTopProduct:{
    width: 120,
    padding: 10,
    fontSize: 13,
  },
  allPriceTopProduct: {
    paddingLeft: 10,
    fw
  }
});
