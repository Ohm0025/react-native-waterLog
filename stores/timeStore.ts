import { create } from "zustand";

interface TimeStore {
  currentTime: string;
  targetTime: string;
  timeEnd: string;
  timeStart: string;
  setTimeStart: (time: string) => void;
  setTimeEnd: (time: string) => void;
  setTargetTime: (time: string) => void;
  setCurrentTime: (time: string) => void;
}

export default create<TimeStore>((set) => ({
  currentTime: "",
  targetTime: "",
  timeEnd: "22:00",
  timeStart: "06:00",
  setTimeStart: (time: string) => set({ timeStart: time }),
  setTimeEnd: (time: string) => set({ timeEnd: time }),
  setTargetTime: (time: string) => set({ targetTime: time }),
  setCurrentTime: (time: string) => set({ currentTime: time }),
}));
