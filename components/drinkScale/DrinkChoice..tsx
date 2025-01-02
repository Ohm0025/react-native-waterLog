import { View } from "react-native";
import DrinkScaleBtn from "./DrinkScaleBtn";
import AddCloseBtn from "../AddCloseBtn";
import React from "react";

export default function DrinkChoice({
  closeModal,
  onPress,
  setAmount,
}: {
  closeModal: () => void;
  onPress: () => void;
  setAmount: (amount: number) => void;
}) {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <DrinkScaleBtn
          imgSrc={require("@/assets/images/drink1.png")}
          ml={10}
          onPress={() => setAmount(10)}
        />
        <DrinkScaleBtn
          imgSrc={require("@/assets/images/drink2.png")}
          ml={35}
          onPress={() => setAmount(35)}
        />
        <DrinkScaleBtn
          imgSrc={require("@/assets/images/drink3.png")}
          ml={85}
          onPress={() => setAmount(85)}
        />
      </View>
      <AddCloseBtn onPress={onPress} closeModal={closeModal} />
    </View>
  );
}
