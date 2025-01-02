import { create } from "zustand";

interface WaterAmountStore {
  currentAmount: number;
  totalAmount: number;
  setTotalAmount: (amount: number) => void;
  setCurrentAmount: (amount: number) => void;
}

export default create<WaterAmountStore>((set) => ({
  currentAmount: 0,
  totalAmount: 0,
  setTotalAmount: (amount: number) => set({ totalAmount: amount }),
  setCurrentAmount: (amount: number) => set({ currentAmount: amount }),
}));
