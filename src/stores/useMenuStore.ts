import { create } from "zustand";

type State = {
  menu: boolean;
};

type Action = {
  updateMenu: (menu: State["menu"]) => void;
};

const useMenuStore = create<State & Action>((set) => ({
  menu: false,
  updateMenu: (menu) => set(() => ({ menu: menu })),
}));

export default useMenuStore;
