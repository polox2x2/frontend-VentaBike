import { create } from "zustand";

type State = {
  bikes: Bike[];
};

type Action = {
  updateBikes: (bike: State["bikes"]) => void;
};

const useBikeStore = create<State & Action>((set) => ({
  bikes: [],
  updateBikes: (bikes) => set(() => ({ bikes: bikes })),
}));

export default useBikeStore;
