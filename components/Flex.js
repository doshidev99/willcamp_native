import React, { memo } from "react";
import { View, Text } from "react-native";

const FlexCpn = memo(() => {
  console.log("[FlexCpn] rendering... 🚀");
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
    </View>
  );
});

/* 
	flex: column
	align-items: row
	---
	flex: row
	align-items: column
*/

export { FlexCpn };
