import React, { useRef } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from "react-native";

import { ModalCpn } from "./index";

export const ScrollViewCpn = () => {
  let screen = Dimensions.get("window");

  const ref = useRef(null);
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      maximumZoomScale={3}
      minimumZoomScale={0.2}
    >
      <Image
        source={require("../images/img1.jpg")}
        style={{ width: screen.width, height: screen.width, marginTop: 20 }}
      />
      <Text
        style={{
          fontSize: 20,
          padding: 15,
          textAlign: "center",
          color: "#fff",
          backgroundColor: "green",
        }}
      >
        This is a text
      </Text>

      <TextInput
        style={{
          padding: 10,
          margin: 10,
          borderWidth: 1,
        }}
        placeholder="Enter text"
      />

      <View style={{ backgroundColor: "#a03b51", height: 50 }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#fff",
          }}
        >
          This is a text
        </Text>
      </View>
      <Image
        source={require("../images/img.png")}
        style={{ width: screen.width, height: screen.width, marginTop: 20 }}
      />

      <ModalCpn ref={ref} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

/* 
	Dimensions: get width height on device
	keyboardDismissMode="on-drag" : click outside hidden keyboard
*/
