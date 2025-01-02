import {
  View,
  Text,
  Modal,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Dimensions,
} from "react-native";

import React, { useEffect, useState } from "react";
import memoryWt from "../../memFunc/memoryWt";
import ModalWtInput from "../../components/ModalWtInput";
import dbHandle from "@/dbFunc/dbHandle";
import WaterCircle from "@/components/WaterCircle";
import waterAmount from "@/stores/waterAmount";
import ButtonAdd from "@/components/ButtonAdd";
import ModalWaterInput from "@/components/ModalWaterInput";

export default function Dashboard() {
  const { totalAmount, currentAmount, setCurrentAmount, setTotalAmount } =
    waterAmount();
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
    <>
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
        <WaterCircle totalAmount={totalAmount} currentAmount={currentAmount} />
        <ButtonAdd
          width={width}
          height={height}
          setIsOpenModal={setWaterOpen}
        />
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <ModalWtInput wt={wt} cbSetWt={(wt: number) => setWt(wt)} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={false}
        visible={waterOpen}
        onRequestClose={() => setWaterOpen(false)}
      >
        <ModalWaterInput setModal={setWaterOpen} />
      </Modal>
    </>
  );
}
