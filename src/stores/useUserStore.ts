import { create } from "zustand";

const USER_DEFAULT: User = {
  id: 0,
  nombres: "Undefined",
  apellidos: "Undefined",
  correo: "correo@correo.com",
  tarjeta: "00000000000000",
  cvc: "000",
  fecha: new Date(),
  vencimiento: "30-07-24",
};

type State = {
  user: User;
};

type Action = {
  updateUser: (user: State["user"]) => void;
};

const useUserStore = create<State & Action>((set) => ({
  user: USER_DEFAULT,
  updateUser: (user) => set(() => ({ user: user })),
}));

export default useUserStore;
