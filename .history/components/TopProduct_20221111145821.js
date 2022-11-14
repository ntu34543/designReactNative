import React from "react";
import { useEffect, useState } from "react";
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

export default function TopProduct() {
  const DATA = "https://636df979b567eed48acecbb5.mockapi.io/drugs";
  const [data, setData] = useState([]);
  const getPosts = async () => {
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     name: "Sugar Substitute",
  //     img: require("../assets/img/SugarSubstitute.png"),
  //     price: 112,
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     name: "Juices & Vinegars",
  //     img: require("../assets/img/SugarSubstitute.png"),
  //     price: 150,
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     name: "Vitamins Medicines",
  //     img: require("../assets/img/VitaminsMedicines.png"),
  //     price: 112,
  //   },
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb27ba",
  //     name: "Sugar Substitute",
  //     img: require("../assets/img/SugarSubstitute.png"),
  //     price: 150,
  //   },
  // ];
  // topProduct
  const Item = ({ name, img }) => (
    <View style={styles.item}>
      <Image style={styles.imgTopProduct} source={img} />
      <Text style={styles.nameTopProduct}>{name}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item.name} img={item.img} />;
  return (
    <View style={styles.topPro}>
      <Text style={styles.title3}>Diabetic Diet</Text>
      <SafeAreaView>
        <FlatList
          data={data}
          // renderItem={renderItem}
          keyExtractor={(item, index) => item.id + index.toString()}
          onRefresh={getPosts}
          
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
