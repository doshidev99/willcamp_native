import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducers } from "./reducers";

import AddContainer from "./containers/AddContainer";
import TaskListContainer from "./containers/TaskListContainer";

let store = createStore(rootReducers);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddContainer />
        <View style={{ marginTop: 40 }}>
          <TaskListContainer />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 35 : 0,
    backgroundColor: "tomato",
  },
});
