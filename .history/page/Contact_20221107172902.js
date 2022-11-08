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
  TextInput,
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
          <View style={styles.ContactContainer}>
            <Text style={styles.text1}>Contact</Text>
            <View style={styles.adressContact}>
              <Text style={styles.text2}>
                Address: 101B Le Huu Trac, Phuong Phuoc My, Quan Son Tra Thanh
                Pho Da Nang
              </Text>
              <Text style={styles.text2}>Phone number: 0392328539</Text>
              <Text style={styles.text2}>Email: ntu34543@gmail.com</Text>
            </View>
            <View style={styles.inputContact}>
              <TextInput style={styles.textInput} />
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
  ContactContainer: {
    padding: 20,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  adressContact: {
    paddingTop: 20,
  },
  text2: {
    paddingTop: 5,
  },
  inputContact: { 
    paddingTop: 20 
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
  }
});
