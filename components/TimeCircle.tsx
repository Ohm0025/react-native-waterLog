import timeStore from "@/stores/timeStore";
import {
  compareDate,
  differeceTime,
  getNowDate,
  getNowTime,
  isBetweenTime,
  setNextTime,
} from "@/utils/handleDate";
import { useEffect } from "react";
import { Alert, Text } from "react-native";
import { CircularProgressBase } from "react-native-circular-progress-indicator";
import StatBoard from "./StatBoard";
import dateStore from "@/stores/dateStore";

type TimeCircleProps = {
  radius: number;
  isComplete?: boolean;
  targetAmount: number;
  currentAmount: number;
  fetchAmount: () => void;
};

export default function TimeCircle({
  radius,
  isComplete,
  targetAmount,
  currentAmount,
  fetchAmount,
}: TimeCircleProps) {
  const {
    currentTime,
    targetTime,
    timeStart,
    timeEnd,
    setTargetTime,
    setCurrentTime,
  } = timeStore();
  const { currentDate, setCurrentDate } = dateStore();

  const createTwoButtonAlert = () => {
    if (
      targetTime === "" ||
      targetTime > timeEnd ||
      targetAmount <= currentAmount
    )
      return;

    Alert.alert("แจ้งเตือน", "ให้ดื่มน้ำแล้วนะ เวลา " + targetTime, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  useEffect(() => {
    const interVal = setInterval(() => {
      const nowTime = getNowTime();
      setCurrentTime(nowTime);
      if (nowTime === targetTime || targetTime === "") {
        createTwoButtonAlert();
        setTargetTime(setNextTime(nowTime));
      }
      if (currentDate === "") {
        setCurrentDate(getNowDate());
        return;
      }
      const dateNow = getNowDate();
      const diffDate = compareDate(currentDate, dateNow);
      if (diffDate != 0) {
        fetchAmount();
        setCurrentDate(dateNow);
      }
    }, 1000);

    return () => {
      clearInterval(interVal);
    };
  }, [targetTime]);

  return (
    <CircularProgressBase
      radius={radius}
      value={
        isComplete || !isBetweenTime(timeStart, timeEnd, targetTime)
          ? 100
          : differeceTime(currentTime, targetTime)
      }
      activeStrokeColor={"green"}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeColor="gray"
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
    >
      <StatBoard
        timeEnd={timeEnd}
        timeStart={timeStart}
        targetTime={targetTime}
        isComplete={isComplete}
        targetAmount={targetAmount}
        currentAmount={currentAmount}
      />
    </CircularProgressBase>
  );
}
