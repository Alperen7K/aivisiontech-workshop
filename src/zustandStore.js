import { create } from "zustand";

export const useStore = create((set) => ({
  isShow: "main",
  setIsShow: (section) => set({ isShow: section }),
  count: 1,
  inc: (number) => set((state) => ({ count: parseInt(number) + state.count })),
  theme: {
    theme: "dark",
    bgColor: "bg-[#393E46]",
    textColor: "text-[#fff]",
    cardBorder: "border-[#000]",
  },
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
