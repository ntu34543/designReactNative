import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal, Button } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Detail(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      
      <View style={styles.button}>
        <Button title="Cancer!" onPress={props.onCancer} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
