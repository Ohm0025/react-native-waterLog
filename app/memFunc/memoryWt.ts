import AsyncStorage from "@react-native-async-storage/async-storage";

const loadStoredWt = async () => {
  const storedWt = await AsyncStorage.getItem("stored-wt");
  if (Number(storedWt)) {
    return Number(storedWt);
  }
  return 0;
};
const saveStoredWt = async (wt: number) => {
  await AsyncStorage.setItem("stored-wt", wt.toString());
};

export default { loadStoredWt, saveStoredWt };
