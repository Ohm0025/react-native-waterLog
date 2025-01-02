import TableData from "@/components/table/TableData";
import { Text, View } from "react-native";

export default function Table() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      <TableData />
    </View>
  );
}
