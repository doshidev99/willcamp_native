import React from "react";
import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import Button from "react-native-button";

export const TouchesCpn = () => {
  const _handlePress = () => {
    Alert.alert("you pressed the button!");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <View
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 7,
          color: "#fff",
          shadowRadius: 20,
          shadowOpacity: 0.5,
        }}
      >
        <Button onPress={_handlePress} title="clicked" color="red" />
      </View> */}

      <Button
        style={{ color: "white" }}
        containerStyle={{
          padding: 10,
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: "green",
        }}
        disabledContainerStyle={{ backgroundColor: "pink" }}
        onPress={_handlePress}
      >
        {" "}
        Press me
      </Button>

      <TouchableHighlight underlayColor="purple" onPress={_handlePress}>
        <View
          style={{ backgroundColor: "green", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ color: "#fff" }}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback useForeground={false}>
        <View
          style={{ backgroundColor: "blue", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ color: "#fff" }}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity activeOpacity={0.3}>
        <View
          style={{
            backgroundColor: "lightblue",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        // onPress={_handlePress}
        onPressIn={() => alert("onPressIn")}
        // onPressOut={() => alert("onPressOut")}
        disabled={true}
      >
        <View
          style={{ backgroundColor: "purple", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ color: "#fff" }}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

/* 
	underlayColor will run when has onPress event
	useForeground: use parent background
*/
