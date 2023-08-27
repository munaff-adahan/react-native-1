import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  TextInput,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";



function App() {

  const [getText, setText] = useState("");
  const [getName, setName] = useState("");

  viewData();

  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>AsyncStorage API</Text>

      <View style={styles.view1}>
        <Text style={styles.text2}>Name</Text>
        <TextInput style={styles.input1} onChangeText={setText}></TextInput>
      </View>

      <Button title="Save Data" color="#F94C10" onPress={saveData} />

      <Text>{getName}</Text>
    </SafeAreaView>
  );

  async function saveData() {
    await AsyncStorage.setItem("name", getText);
    const x = await AsyncStorage.getItem("name");
    Alert.alert("Name",x);
    viewData();
  }

  async function viewData() {
    const name = await AsyncStorage.getItem("name");
    setName(name);
  }

  return ui;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 18,
    color: "#00776b",
  },
  text2: {
    fontSize: 16,
  },
  input1: {
    fontSize: 16,
    height: 40,
    width: 280,
    borderWidth: 1,
    padding: 10,
    marginStart: 10,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
