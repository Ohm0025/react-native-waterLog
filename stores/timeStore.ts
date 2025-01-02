import { create } from "zustand";

interface TimeStore {
  currentTime: string;
  targetTime: string;
  timeEnd: string;
  setTimeEnd: (time: string) => void;
  setTargetTime: (time: string) => void;
  setCurrentTime: (time: string) => void;
}

export default create<TimeStore>((set) => ({
  currentTime: "",
  targetTime: "",
  timeEnd: "22:00",
  setTimeEnd: (time: string) => set({ timeEnd: time }),
  setTargetTime: (time: string) => set({ targetTime: time }),
  setCurrentTime: (time: string) => set({ currentTime: time }),
}));
