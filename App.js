import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ImageCpn, FlexCpn } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
});
