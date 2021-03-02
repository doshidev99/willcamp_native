import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";

const AddComponent = ({ onClickAdd }) => {
  const [newTask, setNewTask] = useState("");

  const _handleAddTask = () => {
    if (!newTask.trim()) {
      return;
    }

    onClickAdd({
      task: newTask,
      completed: Boolean(Math.round(Math.random())),
    });

    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter your task"
        autoCapitalize="none"
        placeholderTextColor="white"
        keyboardType="default"
        value={newTask}
        onChangeText={(text) => setNewTask((preTask) => text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="green"
        onPress={_handleAddTask}
      >
        <Text style={{ color: "white" }}>Add new task</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 40,
  },

  input: {
    height: 50,
    width: "60%",
    margin: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    color: "white",
  },
  button: {
    height: 50,
    backgroundColor: "green",
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
});

export default AddComponent;
