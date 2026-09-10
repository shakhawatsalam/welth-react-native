import { create } from "zustand";

interface UserStore {
  currency: string;
  setCurrency: (value: string) => void;
  needsOnbording: boolean | null;
  setNeedsOnbording: (value: boolean | null) => void;
}

// functions
export const useUserStore = create<UserStore>((set) => ({
    currency: "INR",
    setCurrency: (value) => set({ currency: value }),
    needsOnbording: null,
    setNeedsOnbording: (value) => set({ needsOnbording: value }),
}));
