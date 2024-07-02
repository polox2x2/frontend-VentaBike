import { create } from "zustand";

type State = {
  isShop: boolean;
};

type Action = {
  updateIsShop: (isShopt: State["isShop"]) => void;
};

const useAnchorStore = create<State & Action>((set) => ({
  isShop: false,
  updateIsShop: (isShop) => set({ isShop: isShop }),
}));

export default useAnchorStore;
