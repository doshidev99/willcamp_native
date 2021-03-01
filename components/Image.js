import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export function ImageCpn() {
  const source = {
    uri: "https://picsum.photos/200",
  };
  return (
    <View>
      <Image style={styles.img} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
});
