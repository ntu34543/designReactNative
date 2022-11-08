import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal } from "react-native";

export default function Detail(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Click!" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancer!" onPress={props.onCancer}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  
});
