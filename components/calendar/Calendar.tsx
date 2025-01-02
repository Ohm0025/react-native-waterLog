import { Modal, View } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { compareDate, getNowDate } from "@/utils/handleDate";
import { extractTime } from "@/utils/formatData";
import dateStore from "@/stores/dateStore";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ResultModal from "./ResultModal";

export default function CalendarRecord() {
  const { currentDate } = dateStore();

  const [index, setIndex] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("");

  const genObjDateMark = () => {};

  const handleOnDayPress = (day: any) => {
    const dateNow = getNowDate();
    const diffDate = compareDate(dateNow, day.dateString);

    if (diffDate >= 0) {
      setOpenModal(true);
      setSelectedDate(day.dateString);
      console.log("can show result");
    }
  };
  return (
    <>
      <View>
        <Calendar
          current={currentDate}
          markedDates={{}}
          onDayPress={handleOnDayPress}
          onMonthChange={(date: any) => {
            const modDate = extractTime(date.dateString);
            console.log(modDate);
          }}
        />
      </View>

      <SafeAreaProvider>
        <SafeAreaView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={() => setOpenModal(false)}
          >
            <ResultModal
              selectedDate={selectedDate}
              setOpenModal={setOpenModal}
            />
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
