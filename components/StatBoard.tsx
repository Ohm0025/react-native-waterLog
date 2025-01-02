import { isBetweenTime } from "@/utils/handleDate";
import { View, Text } from "react-native";

type StatBoardProps = {
  targetTime: string;
  timeStart: string;
  timeEnd: string;
  isComplete?: boolean;
  targetAmount: number;
  currentAmount: number;
};

export default function StatBoard(props: StatBoardProps) {
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        {props.isComplete
          ? "Complete"
          : props.currentAmount + " / " + props.targetAmount}
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        next :
        {props.isComplete ||
        !isBetweenTime(props.timeStart, props.timeEnd, props.targetTime)
          ? "Tomorrow"
          : props.targetTime}
      </Text>
    </View>
  );
}
