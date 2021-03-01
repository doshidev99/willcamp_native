import React, { useEffect } from "react";
import { Keyboard, StyleSheet, Text, View, TextInput } from "react-native";

export const InputCpn = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        console.log("keyboardDidShow", "<----"); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        console.log("keyboardDidHide", "<----"); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={{ backgroundColor: "grey", flex: 1 }}>
      <TextInput
        style={{
          height: 80,
          padding: 10,
          borderColor: "#000",
          borderWidth: 1,
          margin: 20,
        }}
        keyboardType="email-address"
        placeholder="Enter your email"
        placeholderTextColor="white"
        onChangeText={(text) => {
          // eslint-disable-next-line no-console
          console.log(text, "<----");
        }}
      />

      <TextInput
        style={{
          height: 80,
          padding: 10,
          borderColor: "#000",
          borderWidth: 1,
          margin: 20,
        }}
        keyboardType="default"
        placeholder="input default"
        placeholderTextColor="white"
        secureTextEntry={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="google"
      />

      <TextInput
        style={{
          height: 80,
          padding: 10,
          borderWidth: 1,
          margin: 20,
        }}
        keyboardType="default"
        placeholder="mutiline input"
        placeholderTextColor="white"
        borderBottomColor="green"
        borderRightColor="red"
        returnKeyType="done"
        multiline={true}
        secureTextEntry={true}
        editable={true}
        autoFocus={true}
      />
    </View>
  );
};

/* 
  keyboardType : email -> keyboard has @
  secureTextEntry : input password
  onChangeText: fn get value
  editable : ~~ visible
*/

const styles = StyleSheet.create({});
