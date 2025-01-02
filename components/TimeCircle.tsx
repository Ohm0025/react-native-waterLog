import timeStore from "@/stores/timeStore";
import { differeceTime, getNowTime, setNextTime } from "@/utils/handleDate";
import { useEffect } from "react";
import { Alert, Text } from "react-native";
import { CircularProgressBase } from "react-native-circular-progress-indicator";

type TimeCircleProps = {
  radius: number;
  isComplete?: boolean;
};

export default function TimeCircle({ radius, isComplete }: TimeCircleProps) {
  const { currentTime, targetTime, setTargetTime, setCurrentTime } =
    timeStore();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "แจ้งเตือน",
      "ให้ดื่มน้ำแล้วนะ เวลา " + targetTime,

      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

  useEffect(() => {
    const interVal = setInterval(() => {
      const nowTime = getNowTime();
      setCurrentTime(nowTime);
      if (nowTime === targetTime || targetTime === "") {
        createTwoButtonAlert();
        setTargetTime(setNextTime(nowTime));
      }
    }, 1000);

    return () => {
      clearInterval(interVal);
    };
  }, [targetTime]);

  return (
    <CircularProgressBase
      radius={radius}
      value={differeceTime(currentTime, targetTime)}
      activeStrokeColor={"green"}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeColor="gray"
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
    >
      <Text>{currentTime}</Text>
    </CircularProgressBase>
  );
}
