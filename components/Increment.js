import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "react-native-button";

const Increment = ({ onIncrement, onDecrement, times }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text
        style={{
          margin: 20,
          fontWeight: "bold",
          color: "forestgreen",
          fontSize: 20,
        }}
      >
        Redux saga demo
      </Text>

      <View style={{ flexDirection: "row", height: 50, margin: 10 }}>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 5,
            backgroundColor: "darkviolet",
          }}
          style={styles.containerButton}
          onPress={() => onDecrement(1)}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Decrement -
          </Text>
        </Button>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 5,
            backgroundColor: "darkviolet",
            marginLeft: 30,
          }}
          style={styles.containerButton}
          onPress={() => onIncrement(1)}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Increment +
          </Text>
        </Button>
      </View>
      <Text style={{ color: "yellow", fontSize: 17 }}> Count: {times}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    fontSize: 10,
    color: "white",
  },
});

export default Increment;
