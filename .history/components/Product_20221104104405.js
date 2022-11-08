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
  TouchableOpacity,
} from "react-native";
import Detail from "./details/Detail";

export default function Product() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function startBuy() {
    setModalIsVisible(true);
  }

  function endBuy() {
    setModalIsVisible(false);
  }

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
  // all Products
  const AllProduct = ({ name, img, price }) => (
    <View style={styles.itemAllProduct}>
      <Image style={styles.imgTopProduct} source={img} />
      <Text style={styles.allNameTopProduct}>{name}</Text>
      <Text style={styles.allPriceTopProduct}>${price}</Text>
    </View>
    //   <Pressable
    //   onPress={() => setShowWarning(false)}
    //   style={styles.warning_button}
    //   android_ripple={{ color: "black" }}
    // >
    //   <Text style={styles.text}>OK</Text>
    // </Pressable>
  );
  const renderallProduct = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Home")}
      // style={styles.warning_button}
      android_ripple={{ color: "#ffc618" }}
    >
      <AllProduct name={item.name} img={item.img} price={item.price} />
    </Pressable>
  );
  return (
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
      <Detail visible={modalIsVisible} onCancer={endBuy} />
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    flex: 3,
  },
  itemAllProduct: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#f2f4f6",
    borderRadius: 15,
  },
  allNameTopProduct: {
    width: 120,
    height: 70,
    padding: 10,
    fontSize: 13,
  },
  allPriceTopProduct: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
