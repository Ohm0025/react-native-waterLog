import { View, Text, Dimensions } from "react-native";
import { styleTable as styles } from "@/styles";
import { extractTime } from "@/utils/formatData";

export default function RenderRow({ item }: any) {
  return (
    <View style={{ ...styles.row }}>
      <Text style={{ ...styles.cell, width: "50%" }}>{item.amount}</Text>
      <Text style={{ ...styles.cell, width: "50%" }}>
        {extractTime(item.createdAt)}
      </Text>
    </View>
  );
}
