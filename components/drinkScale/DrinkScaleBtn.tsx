import { Text, Image, TouchableOpacity } from "react-native";

const imgSetting = {
  width: 80,
  aspectRatio: 0.5,
};

export default function DrinkScaleBtn({
  imgSrc,
  ml,
  onPress,
}: {
  imgSrc: any;
  ml: number;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={imgSrc ? imgSrc : require("@/assets/images/drink1.png")}
        style={{
          width: imgSetting.width,
          aspectRatio: imgSetting.aspectRatio,
          height: "auto",
          borderRadius: 10,
        }}
      ></Image>
      <Text
        style={{
          textAlign: "center",
          marginVertical: 10,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {ml} ml
      </Text>
    </TouchableOpacity>
  );
}
