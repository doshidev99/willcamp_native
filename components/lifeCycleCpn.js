import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { FlexCpn } from "./index";

export function LifeCycleCpn() {
  console.log("rendering", "<----");

  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log("componentDidMount", "<----");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate", "<----");
  }, [count]);

  useEffect(() => {
    setIsShow(true);
    return () => {
      setIsShow(false);
    };
  }, []);

  const _handleClick = () => {
    setCount((preState) => preState + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <TouchableHighlight
        style={{ backgroundColor: "green", padding: 10, borderRadius: 5 }}
        onPress={_handleClick}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          click ({count})
        </Text>
      </TouchableHighlight>

      {isShow && (
        <View>
          <Text> Ghost component</Text>
        </View>
      )}

      <FlexCpn />
    </View>
  );
}

/* 

willmount

did-mount

render

will- update

did-update

*/
