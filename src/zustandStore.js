import { create } from "zustand";

export const useStore = create((set) => ({
  isShow: "main",
  setIsShow: (section) => set({ isShow: section }),
  count: 1,
  inc: (number) => set((state) => ({ count: parseInt(number) + state.count })),
  theme: {
    theme: "light",
    bgColor: "bg-[#D6E1ED]",
    textColor: "text-[#000]",
    cardBorder: "border-[#eef2f7]",
  },
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
