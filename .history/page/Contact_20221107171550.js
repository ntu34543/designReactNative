import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environments";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSOTION = {
  latitude: 16.0596588,
  longitude: 108.2385983,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LATITUDE_DELTA,
};

export default function Contact() {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_POSOTION}
            zoomControlEnabled={true}
            zoomEnabled={true}
            region={{
              latitude: 16.0596588,
              longitude: 108.2385983,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              coordinate={{
                latitude: 16.0596588,
                longitude: 108.2385983,
              }}
            ></Marker>
          </MapView>
          <View style={styles.searchContainer}>
            <Text>Contact</Text>
            <View style={styles.adre}>
              <Text>Address: 101B Le Huu Trac, Phuong Phuoc My, Quan Son Tra Thanh Pho Da Nang</Text>
              <Text>Phone number: 0392328539</Text>
              <Text>Email: ntu34543@gmail.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    width: 360,
    height: 500,
    // marginBottom: 400,
  },
});
