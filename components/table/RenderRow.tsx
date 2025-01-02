import { View, Text, Dimensions } from "react-native";
import { styleTable as styles } from "@/styles";
import { extractTime } from "@/utils/formatData";

export default function RenderRow({ item }: any) {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.amount}</Text>
      <Text style={styles.cell}>{extractTime(item.createdAt)}</Text>
    </View>
  );
}
