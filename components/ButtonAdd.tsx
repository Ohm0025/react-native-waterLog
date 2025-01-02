import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ButtonAdd({ width, height, setIsOpenModal }: any) {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: "auto",

        borderRadius: "100%",

        backgroundColor: "#fff",

        elevation: 5,
      }}
      onPress={() => {
        setIsOpenModal(true);
      }}
    >
      <FontAwesome5
        name="plus-circle"
        size={width * 0.2 > 100 ? 100 : width * 0.2}
        color="#008ab0"
      />
    </TouchableOpacity>
  );
}
