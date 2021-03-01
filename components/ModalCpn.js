import React, {
  useState
} from "react";
import { Dimensions, Text } from "react-native";
import Modal from "react-native-modalbox";



const screen = Dimensions.get("window");

export const ModalCpn = () => {
  // eslint-disable-next-line no-console
  return (
    <Modal
      style={{
        justifyContent: "center",
        width: screen.width - 80,
        height: 200,
      }}
      position="center"
    >
      <Text> this is modal</Text>
    </Modal>
  );
};
