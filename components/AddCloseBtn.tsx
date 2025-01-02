import { View, TouchableOpacity, Text } from "react-native";
import { styles, style2 } from "@/styles";

export default function AddCloseBtn({
  onPress,
  closeModal,
}: {
  onPress: () => void;
  closeModal: () => void;
}) {
  return (
    <View style={{ flexDirection: "row", gap: 30 }}>
      <TouchableOpacity onPress={onPress} style={styles.btnAmount}>
        <Text style={styles.textBtn}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={closeModal}
        style={{ ...styles.btnAmount, backgroundColor: "#ad0000" }}
      >
        <Text style={styles.textBtn}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
