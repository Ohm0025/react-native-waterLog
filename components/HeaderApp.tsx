import { Text, View } from "react-native";

type HeaderAppProps = {
  currentDate: string;
};

export default function HeaderApp(props: HeaderAppProps) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        marginBottom: -20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          letterSpacing: 1.8,
          fontSize: 25,
          fontWeight: 600,
        }}
      >
        WaterLogger
      </Text>
      <Text style={{ textAlign: "center", fontSize: 25, fontWeight: 600 }}>
        {props.currentDate.split("-").reverse().join("-")}
      </Text>
    </View>
  );
}
