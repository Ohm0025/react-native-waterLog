import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "@/styles";
import { useState } from "react";
import memoryWt from "../memFunc/memoryWt";

type Props = {
  wt: number;
  cbSetWt: (wt: number) => void;
};

export default function ModalWtInput({ wt, cbSetWt }: Props) {
  const [stringWt, setStringWt] = useState(wt.toString());

  const handleChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setStringWt(numericValue);
  };

  const handleSubmit = async () => {
    const numericWt = Number(stringWt);
    if (numericWt > 0) {
      await cbSetWt(numericWt);
      await memoryWt.saveStoredWt(numericWt);
    }
  };

  return (
    <View style={{ ...styles.container, position: "relative" }}>
      <SafeAreaView
        style={{ ...styles.inputContainer, position: "absolute", top: 160 }}
      >
        <Text style={styles.labelInput}>{"น้ำหนัก"}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textContainer}
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
          value={Number(stringWt) > 0 ? stringWt : ""}
          onChangeText={handleChange}
        ></TextInput>

        <TouchableOpacity onPress={handleSubmit} style={styles.btnHome}>
          <Text style={styles.textBtn}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
