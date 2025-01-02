import {
  View,
  Text,
  Modal,
  StatusBar,
  useColorScheme,
  Dimensions,
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import React, { useEffect, useState } from "react";
import memoryWt from "../../memFunc/memoryWt";
import ModalWtInput from "../../components/ModalWtInput";
import dbHandle from "@/dbFunc/dbHandle";
import WaterCircle from "@/components/WaterCircle";
import waterAmount from "@/stores/waterAmount";
import ButtonAdd from "@/components/ButtonAdd";
import ModalWaterInput from "@/components/ModalWaterInput";
import { sumTable } from "@/utils/formatData";
import tableData from "@/stores/tableData";
import dateStore from "@/stores/dateStore";
import HeaderApp from "@/components/HeaderApp";

export default function Dashboard() {
  const { totalAmount, currentAmount, setCurrentAmount, setTotalAmount } =
    waterAmount();
  const { setDataTable } = tableData();
  const { currentDate } = dateStore();

  const [modalOpen, setModalOpen] = useState(false);
  const [waterOpen, setWaterOpen] = useState(false);
  const [wt, setWt] = useState(0);

  const { width, height } = Dimensions.get("window");

  const fetchStoredWt = async () => {
    try {
      const storedWt = await memoryWt.loadStoredWt();
      setWt(storedWt);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTable = async () => {
    try {
      await dbHandle.createTable();
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async () => {
    try {
      const data = await dbHandle.getAllRows();
      if (!!data && data.length > 0) {
        const sum = sumTable(data as { amount: number }[]);
        setCurrentAmount(sum);
        setDataTable(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStoredWt();
    fetchTable();
  }, []);

  useEffect(() => {
    if (wt > 0) {
      setModalOpen(false);
      setTotalAmount(wt * 0.033 * 1000);
    } else {
      setModalOpen(true);
    }
  }, [wt]);

  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
          // barStyle={statusBarStyle}
          showHideTransition={"fade"}
          // hidden={true}
        />
        <HeaderApp currentDate={currentDate} />
        <WaterCircle
          totalAmount={totalAmount}
          currentAmount={currentAmount}
          fetchData={fetchData}
        />
        <ButtonAdd
          width={width}
          height={height}
          setIsOpenModal={setWaterOpen}
        />
      </SafeAreaView>

      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        >
          <ModalWtInput wt={wt} cbSetWt={(wt: number) => setWt(wt)} />
        </Modal>
      </SafeAreaView>

      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={waterOpen}
          onRequestClose={() => setWaterOpen(false)}
        >
          <ModalWaterInput fetchData={fetchData} setModal={setWaterOpen} />
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
