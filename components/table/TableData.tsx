import { View, Text, FlatList, Dimensions } from "react-native";
import { styleTable as styles } from "@/styles";
import RenderRow from "./RenderRow";
import tableData from "@/stores/tableData";
import { sumTable } from "@/utils/formatData";

export default function TableData() {
  const { dataTable } = tableData();
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header, { width: width * 0.5 }]}>
          Amount (ml)
        </Text>
        <Text style={[styles.cell, styles.header, { width: width * 0.5 }]}>
          Time Stamp
        </Text>
      </View>

      {/* Table Rows */}
      <FlatList
        scrollEnabled={true}
        nestedScrollEnabled={true}
        style={{
          backgroundColor: "#dce0df",
          maxHeight: height * 0.55,
        }}
        data={dataTable}
        renderItem={RenderRow}
        keyExtractor={(item) => item.id}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Total : {sumTable(dataTable)} ml
      </Text>
    </View>
  );
}
