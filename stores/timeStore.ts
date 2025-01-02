import { create } from "zustand";

interface TimeStore {
  currentTime: string;
  targetTime: string;
  setTargetTime: (time: string) => void;
  setCurrentTime: (time: string) => void;
}

export default create<TimeStore>((set) => ({
  currentTime: "",
  targetTime: "",
  setTargetTime: (time: string) => set({ targetTime: time }),
  setCurrentTime: (time: string) => set({ currentTime: time }),
}));
