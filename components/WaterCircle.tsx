import { CircularProgressBase } from "react-native-circular-progress-indicator";
import { Text, Dimensions, View, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import TimeCircle from "./TimeCircle";
import { compareDate, getNowDate } from "@/utils/handleDate";
import dateStore from "@/stores/dateStore";

type WaterCircleProps = {
  totalAmount: number;
  currentAmount: number;
  fetchData: () => void;
};

export default function WaterCircle(props: WaterCircleProps) {
  const { currentDate, setCurrentDate } = dateStore();

  const { width } = Dimensions.get("window");
  const radiusCircle = width * 0.43 >= 200 ? 200 : width * 0.43;
  const radiusSmall = radiusCircle * 0.7;

  useEffect(() => {
    props.fetchData();
  }, []);

  useEffect(() => {
    if (currentDate === "") {
      setCurrentDate(getNowDate());
      return;
    }
    const dateNow = getNowDate();
    const diffDate = compareDate(currentDate, dateNow);

    if (diffDate != 0) {
      props.fetchData();
      setCurrentDate(dateNow);
    }
  }, [props.currentAmount, currentDate]);

  return (
    <CircularProgressBase
      radius={radiusCircle}
      value={
        props.currentAmount === 0
          ? 0
          : (props.currentAmount * 100) / props.totalAmount > 100
          ? 100
          : (props.currentAmount * 100) / props.totalAmount
      }
      activeStrokeColor={"blue"}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeColor="gray"
      activeStrokeWidth={37}
      inActiveStrokeWidth={37}
    >
      <TimeCircle
        radius={radiusSmall}
        isComplete={props.currentAmount >= props.totalAmount}
        targetAmount={props.totalAmount}
        currentAmount={props.currentAmount}
      />
    </CircularProgressBase>
  );
}
