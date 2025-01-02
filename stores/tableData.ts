import { create } from "zustand";

export default create<any>((set) => ({
  dataTable: [],
  setDataTable: (data: any) => set({ dataTable: data }),
}));
