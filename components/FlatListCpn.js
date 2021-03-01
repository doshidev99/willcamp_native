import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Swipeout from "react-native-swipeout";
import { _data } from "../constants";
import { ModalCpn } from "./index";

const FlatListItem = ({ index, item }) => {
  const swipeSettings = {
    autoClose: true,
    right: [
      {
        onPress: () => {},
        text: "delete",
        type: "delete",
      },
    ],
  };

  return (
    <Swipeout {...swipeSettings}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: index % 2 === 0 ? "tomato" : "purple",
        }}
      >
        <Image
          source={{ url: item.image }}
          style={{ width: 100, height: 100, margin: 5 }}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ color: "white" }}>{item.name}</Text>
          <Text style={{ color: "white" }}>{item.decription}</Text>
        </View>

        <View style={{ height: 1, backgroundColor: "#fff" }}></View>
      </View>
    </Swipeout>
  );
};

export const FlatListCpn = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal={false}
        data={_data}
        renderItem={({ item, index }) => {
          return <FlatListItem index={index} item={item} key={item.key} />;
        }}
      />

      <ModalCpn />
    </View>
  );
};
