import { View, Text, FlatList } from "react-native";
import { styleTable as styles } from "@/styles";
import RenderRow from "./RenderRow";
import tableData from "@/stores/tableData";

export default function TableData() {
  const { dataTable } = tableData();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Amount (ml)</Text>
        <Text style={[styles.cell, styles.header]}>Time Stamp</Text>
      </View>

      {/* Table Rows */}
      <FlatList
        scrollEnabled={true}
        nestedScrollEnabled={true}
        style={{
          backgroundColor: "#dce0df",
        }}
        data={dataTable}
        renderItem={RenderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
