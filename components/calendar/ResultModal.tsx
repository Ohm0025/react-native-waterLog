import {
  View,
  Text,
  Dimensions,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { styleTable as styles } from "@/styles";
import RenderRow from "../table/RenderRow";
import { useEffect, useState } from "react";
import dbHandle from "@/dbFunc/dbHandle";
import { sumTable } from "@/utils/formatData";

type ResultModalType = {
  selectedDate: string;
  setOpenModal: (state: boolean) => void;
};

export default function ResultModal(props: ResultModalType) {
  const { width, height } = Dimensions.get("window");
  const [tableData, setTableData] = useState<any[]>([]);

  const fetchData = async () => {
    const res = await dbHandle.getDataAtDate(props.selectedDate);
    if (res) {
      setTableData(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.selectedDate]);

  return (
    <View
      style={{
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: "auto",
        width: width,
        height: height * 0.9,
        backgroundColor: "gray",
      }}
    >
      <Text
        style={{
          paddingTop: 10,
          marginBottom: 15,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Result at {props.selectedDate}
      </Text>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          maxHeight: height * 0.6,
        }}
      >
        {/* Table Header */}
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
            maxHeight: height * 0.43,
            backgroundColor: "#dce0df",
            width: width,
          }}
          data={tableData}
          renderItem={RenderRow}
          keyExtractor={(item) => item.id}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          Total : {sumTable(tableData)} ml
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "skyblue",
          padding: 8,
          marginTop: 15,
          width: "90%",
          marginHorizontal: "auto",
        }}
        onPress={() => props.setOpenModal(false)}
      >
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 600 }}>
          Close
        </Text>
      </TouchableOpacity>
    </View>
  );
}
