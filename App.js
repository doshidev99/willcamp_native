import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

//redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducers } from "./reducers";

import AddContainer from "./containers/AddContainer";
import TaskListContainer from "./containers/TaskListContainer";

import IncrementContainer from "./containers/IncrementContainer";

// redux-saga

import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
// Middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* redux demo */}
        {/* <AddContainer />
        <View style={{ marginTop: 40 }}>
          <TaskListContainer />
        </View> */}

        <IncrementContainer />
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
