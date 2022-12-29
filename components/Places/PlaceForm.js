import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },

  label: {
    fontSize: 18,
    letterSpacing: 1,
    marginBotton: 4,
    color: Colors.lightbg,
  },

  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    color: Colors.gray700,
    borderRadius: 5,
    backgroundColor: Colors.lightbg,
  },
});
