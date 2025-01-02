import { View, Text } from "react-native";

type StatBoardProps = {
  targetTime: string;
  isComplete?: boolean;
  targetAmount: number;
  currentAmount: number;
};

export default function StatBoard(props: StatBoardProps) {
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        {!props.isComplete
          ? "Complete"
          : props.currentAmount + " / " + props.targetAmount}
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        next :{props.isComplete ? "Tomorrow" : props.targetTime}
      </Text>
    </View>
  );
}
