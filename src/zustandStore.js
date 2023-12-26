import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  selam: "Merhaba Mehmet",
  inc: (number) => set((state) => ({ count: parseInt(number) + state.count })),
  // selamla:(_name)=> set(state)=>({selam:`Selam ${_name}`}),
}));
