import {
  View,
  Text,
  Modal,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";

import React, { useEffect, useState } from "react";
import memoryWt from "../../memFunc/memoryWt";
import ModalWtInput from "../../components/ModalWtInput";
import dbHandle from "@/dbFunc/dbHandle";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const [wt, setWt] = useState(0);

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
    } else {
      setModalOpen(true);
    }
  }, [wt]);
  const colorScheme = useColorScheme();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
          // barStyle={statusBarStyle}
          showHideTransition={"fade"}
          // hidden={true}
        />
        <Text>Dashboar efwefewf d</Text>
        <Text>Dashboar efwefewf d{colorScheme}</Text>
      </SafeAreaView>
      {/* <View style={{ flex: 1 }}>
        <Text>Dashboard</Text>
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <ModalWtInput wt={wt} cbSetWt={(wt: number) => setWt(wt)} />
      </Modal>
    </>
  );
}
