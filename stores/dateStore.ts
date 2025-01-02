import { create } from "zustand";

interface TimeStore {
  currentDate: string;
  setCurrentDate: (date: string) => void;
}

export default create<TimeStore>((set) => ({
  currentDate: "",
  setCurrentDate: (date: string) => set({ currentDate: date }),
}));
