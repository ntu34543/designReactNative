import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Banner() {
  return (
    
  )
}

const styles = StyleSheet.create({
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
});
